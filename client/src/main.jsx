import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/App"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Register from "./routes/register/register"
import Error from "./routes/error"

const router = createBrowserRouter([
  {
    path:"/",
     element: <App />,
     errorElement: <Error />,
     children:[
       
       {path:"/", element:<App />},
       { path: "register", element: <Register /> },
       
  ]
  }
  
  
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
