import Navbar from "@/components/navbar"
import { Outlet } from "react-router"


const MainLayout = () => {
  return (
    <div className='w-full min-h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout