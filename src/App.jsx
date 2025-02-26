
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/layouts/AppLayout'; 
import './App.css'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { About } from './pages/About';
import { CountryDetails } from './components/layouts/CountryDetails';

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "country",
        element: <Country/>
      },
      {
        path: "country/:id",
        element: <CountryDetails/>

      },
    ]
  }
 
])

const App = ()=>{
  
  
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
