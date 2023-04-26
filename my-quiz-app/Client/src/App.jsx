import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './Styles/App.css'
import Main from './Components/Main'
import Quiz from './Components/Quiz'
import Result from './Components/Result'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  },
])

const App = () => {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;