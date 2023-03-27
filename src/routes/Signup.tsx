import { ControlledInput } from '../components/ControlledInput'
import { BrandIcon } from '../components/Icons/BrandIcon'
import { EmailIcon } from '../components/Icons/EmailIcon'
import { LockIcon } from '../components/Icons/LockIcon'

export function Signup (): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('jelouda')
  }

  return (
    <main className='flex place-items-center h-screen'>
      <section className='w-11/12 mx-auto p-8 rounded-md border border-light-gray md:w-6/12 lg:w-3/12'>
        <BrandIcon />
        <h1 className='font-bold text-xl my-4'>Join thousands of learners from around the world </h1>
        <p className='mb-4'>Master web development by making real-life projects. There are multiple paths for you to choose</p>
        <form onSubmit={handleSubmit}>
          <ControlledInput
            icon={<EmailIcon className='absolute top-2/4 -translate-y-2/4 left-3' />}
            name='email'
            placeHolder='Email'
          />
          <ControlledInput
            icon={<LockIcon className='absolute top-2/4 -translate-y-2/4 left-3' />}
            name='password'
            placeHolder='Password'
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
