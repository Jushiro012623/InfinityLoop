import React, { Fragment } from 'react'
import { ThemeSwitch } from './themeSwitch'
import Typography from './ui/typography'
import { Avatar, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Kbd, Spacer, Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure, } from '@heroui/react'
import { GoBell  } from "react-icons/go";
import SearchInput from './ui/searchInput';
import { useLocation, useNavigate } from 'react-router';
import { IoChatbubblesOutline  } from 'react-icons/io5';
import { FiMenu, FiPlus, FiSearch } from "react-icons/fi";
import { mockMessage, mockNotification } from '@/config/mock';
import { IoIosLogOut, IoMdClose } from 'react-icons/io';
import { SideBarBody } from './sidebar';
import useLocalStorage from '@/hooks/useLocalStorage';
import { SiTruenas } from 'react-icons/si';
import { BrandLogo } from './ui/icons';

const Navbar = ({pageTitle} : {pageTitle: string}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <React.Fragment>
            <nav className='h-20 border-b-1 border-default-200 flex items-center justify-end md:justify-between px-10 '>
                <Typography size='lg' tag='h1' className='hidden md:flex font-bold capitalize'>{pageTitle}</Typography>

                <div className=' flex items-center lg:w-[500px]'>
                    <div className='flex-grow hidden md:flex'>
                        <SearchInput
                            className={`
                                transition-all duration-300 ease-in-out transform origin-left
                            `}
                        />
                    </div>
                    <FiSearch className='flex md:hidden opacity-60' size={22}/>
                    <Spacer x={5} />
                    <NavbarMessage />
                    <Spacer x={5} />
                    <NavbarNotification />
                    <Spacer x={5} />
                    <ThemeSwitch className='hidden md:flex'/> 
                    <Spacer x={5} className='hidden md:flex' />
                    <NavbarAvatar />
                    <FiMenu className='flex md:hidden opacity-60 cursor-pointer' size={22} onClick={onOpen} />
                    <MobileNavBar isOpen={isOpen} onOpenChange={onOpenChange} />
                </div>
            </nav>
        </React.Fragment>
    )
}

const NavbarAvatar = () => {
    const navigate = useNavigate();
    return (
        <Dropdown 
            showArrow
            radius="sm"
            placement="bottom-end"
        >
            <DropdownTrigger>
                <Avatar src="https://i.pravatar.cc" isBordered isFocusable className='cursor-pointer hidden md:flex'/>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
            >
                <DropdownSection showDivider aria-label="Profile & Actions">
                    <DropdownItem key="profile" onPress={() => navigate("/profile")}>Profile</DropdownItem>
                    <DropdownItem key="new_project" endContent={<FiPlus className="text-large" />}>
                        New Offer
                    </DropdownItem>
                    <DropdownItem key="settings">Settings</DropdownItem>
                </DropdownSection>
                <DropdownSection aria-label="Help & Feedback">
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={() => navigate('/login')} endContent={<IoIosLogOut className="text-large" />}>Log Out</DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

const NavbarNotification = () => {
    return (
    <Dropdown
        showArrow
        radius="sm"
        className='w-96'
        placement="bottom-end"
    >
            <DropdownTrigger>
                <div className='flex items-center cursor-pointer'>
                    <Badge color="danger" content={10} shape="circle">
                        <GoBell className='opacity-60 outline-none ' size={22}/> 
                    </Badge>
                </div>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
            >
                <DropdownItem key="title" className='h-12 pointer-events-none' isReadOnly showDivider>
                    Notifications
                </DropdownItem>
                
                <DropdownSection
                    className='
                        max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                        pr-2
                    '
                >
                    {
                        mockNotification.map((notification) => (
                            <Fragment>
                                <DropdownItem key={notification.id}>
                                    <div className='flex w-full justify-start gap-x-2 items-center'>
                                        <Badge color={notification.isOnline ? "success" : "default"} content="" placement="bottom-right" shape="circle">
                                            <Avatar src={notification.avatar} />
                                        </Badge>
                                        <div>
                                            <Typography size='sm'>{notification.name}
                                                <span className='font-light text-default-400/90 dark:text-default-500'>&nbsp;{notification.notification}</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </DropdownItem>
                            </Fragment>
                        ))
                    }
                </DropdownSection>
        </DropdownMenu>
    </Dropdown>
    )
}

const NavbarMessage = () => {
    return (
        <Dropdown
            radius="sm"
            className='w-96 mt-2'
            placement="bottom-end"
        >
            <DropdownTrigger>
                <div className='flex items-center cursor-pointer'>
                    <Badge color="danger" content={6} shape="circle">
                        <IoChatbubblesOutline className='opacity-60  outline-none ' size={22}/>
                    </Badge>
                </div>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
            >
                <DropdownItem key="taitle" className='h-12 pointer-events-none' showDivider isReadOnly>
                    Messages
                </DropdownItem>
                <DropdownItem key="new_message" className='h-12' startContent={<FiPlus className="text-large" />} endContent={<Kbd keys={["command", "shift"]}>N</Kbd>}>
                    New Message
                </DropdownItem>
                <DropdownSection className='
                        max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                        pr-2
                    ' >
                    {
                        mockMessage.map((message) => (
                            <Fragment key={message.id}>
                                <DropdownItem key={message.id}>
                                    <div className='flex w-full justify-start gap-x-2'>
                                        <Badge color={message.isOnline ? "success" : "default"} content="" placement="bottom-right" shape="circle">
                                            <Avatar src={message.avatar} />
                                        </Badge>
                                        <div>
                                            <Typography size='sm'>{message.name}</Typography>
                                            <Typography size='xs' className='text-default-400/90 dark:text-default-500'>{message.message}</Typography>
                                        </div>
                                    </div>
                                </DropdownItem>
                            </Fragment>
                        ))
                    }
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

const MobileNavBar = ({isOpen, onOpenChange }: any) => {
    const [ wideSideBar ] = useLocalStorage('wideSidebar', true)

    const { pathname: currentPath } = useLocation()
    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size='sm'  radius="none" hideCloseButton>
            <DrawerContent>
            {(onClose) => (
                <>
                <IoMdClose size={33} className='opacity-60 absolute right-6 top-6 cursor-pointer' onClick={onClose}/>
                <DrawerHeader className="flex flex-col gap-1">
                    <div className={`transition-all duration-300`}>
                        <div className={`w-full flex gap-x-3 items-center py-2 transition-all duration-300 `}>
                            <img
                                src="https://i.pravatar.cc"
                                className="w-10 h-10 rounded-full object-cover"
                                alt="avatar"
                            />
                            <div
                                className={`
                                transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap
                                `}
                            >
                                <Typography size="sm">Nonito Pasmado</Typography>
                                <Typography size="xs" className="font-light dark:opacity-40 opacity-100">
                                Software Developer
                                </Typography>
                            </div>
                        </div>
                    </div>
                </DrawerHeader>
                <DrawerBody>
                    <SideBarBody currentPath={currentPath} wide={wideSideBar} />
                </DrawerBody>
                <DrawerFooter>
                    <div className='w-full flex items-center justify-center'>
                        <img src='./brand.svg'/>
                        <Typography
                            size="xl"
                            className={`
                                overflow-hidden -translate-y-1 whitespace-nowrap transition-all duration-300 ease-in-out
                                bg-gradient-to-r from-[#2dd4bf] to-[#115e59] bg-clip-text !text-transparent font-rosca
                            `}
                        >
                        Infinity
                        </Typography>
                    </div>
                </DrawerFooter>
                </>
            )}
            </DrawerContent>
        </Drawer>
    )
}

export default Navbar