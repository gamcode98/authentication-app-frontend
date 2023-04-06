interface Props {
  icon: JSX.Element
  placeHolder: string
  error: string | undefined
  [x: string]: any
}

export function ControlledInput (props: Props): JSX.Element {
  const { icon, error, placeHolder, ...restOfProps } = props

  return (
    <div className='mb-4'>
      <div className='relative'>
        {icon}
        <input
          className='mb-2 border border-light-gray block w-full rounded-md py-2 pl-12 focus:outline-none focus:border-gray'
          placeholder={placeHolder}
          {...restOfProps}
        />
      </div>
      <span className='text-red'>{error}</span>
    </div>
  )
}
