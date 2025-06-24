import SEO from "@/components/helmet";
import Navbar from "@/components/navbar"
import SideBar from "@/components/sidebar"
import { pageMetaList,  } from "@/config/pagesTitles";
import { Outlet, useLocation } from "react-router"


const MainLayout = () => {
    
    const { pathname } = useLocation();

    const currentMeta = pageMetaList.find(meta => meta.path === pathname);
    document.title = currentMeta?.title ?? 'Default Title'
    return (
        <div className='w-full min-h-screen flex font-figtree dark:bg-[#1f1f21] '>
            <SEO title={document.title} description="Home" />
            <SideBar />
            <div className="flex w-full flex-col">
                <Navbar pageTitle={document.title} />
                <div className="h-full flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout