import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"


const App = () => {
  return (
     <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Nav />
      <hr className="text-black"/>
      <Outlet />
      <Footer />
     </div>
  )
}

export default App;
