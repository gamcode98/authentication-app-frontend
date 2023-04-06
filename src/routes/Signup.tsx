import { ControlledInput } from '../components/ControlledInput'
import { BrandIcon } from '../components/Icons/BrandIcon'
import { EmailIcon } from '../components/Icons/EmailIcon'
import { LockIcon } from '../components/Icons/LockIcon'
import { useForm } from '../hooks/useForm'

export function Signup (): JSX.Element {
  interface FormValues {
    email: string
    password: string
  }

  const initialValues: FormValues = {
    email: '',
    password: ''
  }

  const validations = (values: FormValues): FormValues => {
    const errors = { email: '', password: '' }

    const regexToEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const regextToPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (values.email === '') {
      errors.email = 'This field is required'
    } else if (!regexToEmail.test(values.email.trim())) {
      errors.email = 'Please enter a valid email'
    }

    if (values.password === '') {
      errors.password = 'This field is required'
    } else if (!regextToPassword.test(values.password.trim())) {
      errors.password = 'Please enter a valid password'
    }

    return errors
  }

  const { handleSubmit, handleChange, errors } = useForm(initialValues, validations)

  return (
    <main className='flex place-items-center h-screen'>
      <section className='w-11/12 mx-auto p-8 rounded-md border border-light-gray md:w-6/12 lg:w-3/12'>
        <BrandIcon />
        <h1 className='font-bold text-xl my-4'>Join thousands of learners from around the world </h1>
        <p className='mb-4'>Master web development by making real-life projects. There are multiple paths for you to choose</p>
        <form onSubmit={handleSubmit}>

          <ControlledInput
            icon={<EmailIcon className='absolute top-2/4 -translate-y-2/4 left-3' />}
            onChange={handleChange}
            placeHolder='Email'
            name='email'
            error={errors?.email}
          />

          <ControlledInput
            icon={<LockIcon className='absolute top-2/4 -translate-y-2/4 left-3' />}
            onChange={handleChange}
            placeHolder='Password'
            type='password'
            name='password'
            error={errors?.password}
          />

          <button
            type='submit'
            className='bg-blue text-white py-2 block w-full rounded-md font-semibold'
          >Start coding now
          </button>
        </form>
      </section>
    </main>
  )
}
