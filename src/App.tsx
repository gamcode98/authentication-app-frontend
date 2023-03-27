import { Route, Routes } from 'react-router-dom'
import { Login } from './routes/Login'
import { Signup } from './routes/Signup'
import { ROUTES } from './utils/routes'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path={ROUTES.INDEX} element={<Signup />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  )
}

export default App
