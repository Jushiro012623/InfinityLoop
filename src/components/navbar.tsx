import React from 'react'
import { ThemeSwitch } from './themeSwitch'
import Typography from './ui/typography'
import { Avatar, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Spacer } from '@heroui/react'
import { GoBell  } from "react-icons/go";
import SearchInput from './ui/searchInput';
import { useLocation } from 'react-router';
import { pageTitles } from '@/config/pagesTitles';
import { IoChatbubblesOutline  } from 'react-icons/io5';
import { FiPlus } from "react-icons/fi";
import { mockMessage, mockNotification } from '@/config/mock';
const Navbar = () => {
    const { pathname } = useLocation();
    const pageTitle = pageTitles[pathname] || 'Overview';

    return (
        <React.Fragment>
            <nav className='h-20 border-b-1 border-default-200 flex items-center '>
                <Typography size='lg' tag='h1' className='ml-10 font-bold capitalize'>{pageTitle}</Typography>
                
                <div className='ml-auto mr-10 flex items-center'>
                    <div className='w-34'>
                        <SearchInput
                            className={`
                                transition-all duration-300 ease-in-out transform origin-left
                            `}
                        />
                    </div>
                    <Spacer x={5} />
                    <NavbarMessage />
                    <Spacer x={5} />
                    <NavbarNotification />
                    <Spacer x={5} />
                    <ThemeSwitch /> 
                    <Spacer x={5} />
                    <NavbarAvatar />
                    
                </div>
            </nav>
        </React.Fragment>
    )
}


const NavbarAvatar = () => {
    return (
        <Dropdown
            showArrow
            radius="sm"
            placement="bottom-end"
        >
            <DropdownTrigger>
                <Avatar src="https://i.pravatar.cc" isBordered isFocusable className='cursor-pointer'/>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
                disabledKeys={["profile"]}
            >
                <DropdownSection showDivider aria-label="Profile & Actions">
                    <DropdownItem key="dashboard">Dashboard</DropdownItem>
                    <DropdownItem key="new_project" endContent={<FiPlus className="text-large" />}>
                        New Offer
                    </DropdownItem>
                    <DropdownItem key="settings">Settings</DropdownItem>
                </DropdownSection>
                <DropdownSection aria-label="Help & Feedback">
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
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
            disabledKeys={["title"]}
        >
                <DropdownSection showDivider>
                    <DropdownItem key="title" className='h-12'>
                        Notifications
                    </DropdownItem>
                </DropdownSection>
                
                <DropdownSection>
                    {
                        mockNotification.map((message) => (
                            <>
                                <DropdownItem key={message.id}>
                                    <div className='flex w-full justify-start gap-x-2 items-center'>
                                        <Badge color={message.isOnline ? "success" : "default"} content="" placement="bottom-right" shape="circle">
                                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                        </Badge>
                                        <div>
                                            <Typography size='sm'>{message.name}
                                                <span className='font-light text-default-400/90 dark:text-default-500'>&nbsp;{message.notification}</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </DropdownItem>
                            </>
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
                    <DropdownSection showDivider>
                        <DropdownItem key="new_message" className='h-12' endContent={<FiPlus className="text-large" />}>
                            New Message
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection>
                        {
                            mockMessage.map((message) => (
                                <>
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
                                </>
                            ))
                        }
                        
                    </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Navbar