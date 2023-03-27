import { Route, Routes } from 'react-router-dom'
import { Login } from './routes/Login'
import { ROUTES } from './utils/routes'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path={ROUTES.INDEX} element={<Login />} />
    </Routes>
  )
}

export default App
