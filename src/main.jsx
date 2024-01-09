import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from "../src/components/Home.jsx"
import MovieList from "../src/components/MovieList.jsx"
import MovieInfo from "../src/components/MovieInfo.jsx"
// import MovieCard from "../src/components/MovieCard.jsx"
import store from "../src/store/store.js"
import {Provider} from "react-redux"


const router = createBrowserRouter([
  {
    path: "/" ,
    element: <App />,
    children : [
      {
        path: "/",
        element: <Home />
      },{
        path: "/movie-listing",
        element : <MovieList />
      },{
        path: "/movie/:id",
        element: <MovieInfo />
      }
    ]
  }
])  

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
 
)

{/* <React.StrictMode> </React.StrictMode>, */}
