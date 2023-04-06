import { useEffect, useRef, useState } from 'react'

type ValidationErrors<T> = {
  [K in keyof T]?: string;
}

interface IUseForm<T extends { [key: string]: any }> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  errors: ValidationErrors<T>
}

export function useForm<T extends { [key: string]: any }> (initialValues: T, validations: (values: T) => ValidationErrors<T>): IUseForm<T> {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ValidationErrors<T>>({})
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = Object.values(values).join('') === ''
      return
    }
    setErrors(validations(values))
  }, [values])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    // handleChange(e)
    setErrors(validations(values))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log({ values })
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    errors
  }
}
