import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Main from './Components/Main'
import Quiz from './Components/Quiz'
import Result from './Components/Result'
import { CheckUserExist } from './Helper/Helper'
import './Styles/App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path: '/result',
    element: <Result></Result>
  },
]);

const App = () => {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;