import { Spacer } from '@heroui/react'
import { BrandLogo } from './ui/icons'
import Typography from './ui/typography'
import { Fragment, type PropsWithChildren } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { sideBarLinks } from '@/config/sidebarLinks.tsx'
import SearchInput from './ui/searchInput'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import useLocalStorage from '@/hooks/useLocalStorage'
import { BiDotsHorizontalRounded } from "react-icons/bi";
const SideBar = () => {

  const [wideSideBar, setWideSideBar] = useLocalStorage('wideSidebar', true)
  return (
    <div
      className={`
        ${wideSideBar ? 'w-72' : 'w-14'}
        h-screen relative flex flex-col 
        transition-all duration-300 ease-in-out
        border-r-1 border-default-200
      `}
    >
      <SideBarHeader wide={wideSideBar} />
      <SideBarBody wide={wideSideBar} />
      <SideBarFooter wide={wideSideBar} />
      <div
        className="border border-default-200 w-8 h-8 bg-white dark:bg-default-50 hover:bg-default-200 dark:hover:bg-default-200 rounded-full cursor-pointer flex items-center justify-center absolute top-1/2 right-0 translate-x-3 z-10"
        onClick={() => setWideSideBar(!wideSideBar)}
        
      >
        <MdKeyboardArrowLeft
          size={20}
          className={`transition-transform duration-300  ${!wideSideBar && 'rotate-180'}`}
        />
      </div>
    </div>
  )
}

const SideBarHeader = ({ wide }: { wide: boolean }) => {
    
    const navigate = useNavigate()

    return (
    <div className="flex items-center pt-5 px-3 transition-all duration-300" onClick={() => navigate('/')}>
        <BrandLogo size={40} className="transition-all" />
        <Spacer x={1} />
        <Typography
        size="xl"
        className={`
            overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out
            bg-gradient-to-r from-[#2dd4bf] to-[#115e59] bg-clip-text !text-transparent font-rosca
            ${wide ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}
        `}
        >
        Infinity
        </Typography>
    </div>
    )
}
const SideBarBody = ({ wide }: { wide: boolean }) => {
  const { pathname: currentPath } = useLocation()

  return (
    <div className="flex-grow mt-4">
      <SearchInput
        className={`
          transition-all duration-300 ease-in-out transform origin-left
          ${wide ? 'scale-100 opacity-100 px-4' : 'scale-0 opacity-0 px-0'}
        `}
      />
      <Spacer y={6} />
      <div className="flex flex-col gap-6">
        {sideBarLinks(18).map((link: any, index: number) => (
          <Fragment key={index}>
            <Typography
              size="sm"
              className={`
                font-medium relative py-2
                ${currentPath === link.path ? '!text-teal-500' : '!dark:text-white/70'}
                px-3 
              `}
            >
              <Link
                to={link.path}
                className="w-full flex items-center gap-x-2 transition-transform"
              >
                <span className={`ml-[.29rem]`}>
                    {link.icon}
                </span>
                <span
                  className={`
                    overflow-hidden whitespace-nowrap transition-transform duration-300 ease-in-out
                    ${wide ? 'opacity-100 max-w-[200px] ml-1' : 'opacity-0 max-w-0'}
                  `}
                >
                  {link.label}
                </span>
                {currentPath === link.path && (
                  <span className="active-indicator absolute w-1 h-2/3 bg-teal-500 left-0" />
                )}
              </Link>
            </Typography>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const SideBarFooter = ({ wide }: { wide: boolean }) => (
    <div className={`${wide ? "px-4" : "px-2"} pb-5 transition-all duration-300`}>
        <div className={`w-full flex gap-x-3 items-center py-2 transition-all duration-300 `}>
            <img
                src="https://i.pravatar.cc"
                className="w-10 h-10 rounded-full object-cover"
                alt="avatar"
            />
            <div
                className={`
                transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap
                ${wide ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
                `}
            >
                <Typography size="sm">Nonito Pasmado</Typography>
                <Typography size="xs" className="font-light dark:opacity-40 opacity-100">
                Software Developer
                </Typography>
            </div>
            <BiDotsHorizontalRounded size={25} className='flex-grow cursor-pointer'/>
        </div>
    </div>
);

const SideBarContainer = ({ children }: PropsWithChildren) => (
  <div className="min-w-72 h-screen flex flex-col dark:bg-default-50 relative border border-teal-200">
    {children}
  </div>
)

export { SideBarContainer, SideBarFooter, SideBarBody, SideBarHeader }
export default SideBar
