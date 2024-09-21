import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/outlet/outlet'
import './App.css';
import HomePage from './pages/homepage/Homepage';
import CategoriesPage from './pages/categoriespage/CategoriesPage';
import SinglePage
 from './pages/SinglePage/SinglePage';
import Register from './pages/Register/Register';
import Login from './pages/login/Login';
import Profile from './pages/Profile/Profile';
import CreatePost from './pages/CreatePost/CreatePost';
import { catPostloader, editorLoader, postloader, profileLoder, singlePageLoader } from './lib/loader';
import About from './pages/AboutPage/About.jsx';
import ErrorPage from './components/errorElement/ErrorPage.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[{
      path:'/',
      element:<HomePage/>,
      loader:postloader,
      errorElement:<ErrorPage/>
      },{
        path:'/categories/:id',
        element:<CategoriesPage/>,
        loader:catPostloader,
        errorElement:<ErrorPage/>
      },{
        path:'/singlePage/:id',
        element:<SinglePage/>,
        loader:singlePageLoader,
        errorElement:<ErrorPage/>
      },{
        path:'/register',
        element:<Register/>
      },{
        path:'/login',
        element:<Login/>
      },{
        path:'/profile',
        element:<Profile/>,
        loader:profileLoder,
        errorElement:<ErrorPage/>
      },{
        path:'/create-post',
        element:<CreatePost/>
      },{
        path:'/EditorPost/:id/:userid',
        element:<CategoriesPage/>,
        loader:editorLoader,
      errorElement:<ErrorPage/>
      },{
        path:'/about',
        element:<About/>
      }]
    }
  ])
  return (    
      <RouterProvider router={router}/>
  )
}

export default App
