interface Props {
  icon: JSX.Element
  name: string
  placeHolder: string
}

export function ControlledInput (props: Props): JSX.Element {
  const { icon, name, placeHolder } = props

  return (
    <div className='relative'>
      {icon}
      <input
        type='text'
        name={name}
        placeholder={placeHolder}
        className='mb-4 border border-light-gray block w-full rounded-md py-2 pl-12 focus:outline-none focus:border-gray'
      />
    </div>
  )
}
