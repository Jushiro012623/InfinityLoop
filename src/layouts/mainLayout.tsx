import Navbar from "@/components/navbar"
import SideBar from "@/components/sidebar"
import { Outlet } from "react-router"


const MainLayout = () => {
  return (
    <div className='w-full min-h-screen flex font-figtree dark:bg-default-50 '>
        <SideBar />
        <div className="flex w-full flex-col">
            <Navbar />
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout