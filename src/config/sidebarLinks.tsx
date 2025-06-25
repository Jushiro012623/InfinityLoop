import { GrAppsRounded, GrCatalog } from "react-icons/gr";
import { BsFillPeopleFill, BsStarFill } from "react-icons/bs";
import { IoChatbubblesSharp,IoPersonOutline,IoSettings  } from "react-icons/io5";
import { RiProgress3Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

const sideBarLinks = (size = 15) => [
  {
    label: "Overview",
    icon: <GrAppsRounded size={size} />,
    path: "/",
    description: "Personalized feed or skill suggestions",
  },
  {
    label: "Profile",
    icon: <IoPersonOutline size={size} />,
    path: "/profile",
    description: "User Profile",
  },
  {
    label: "Skills Directory",
    icon: <GrCatalog size={size} />,
    path: "/skills",
    description: "Browse/search available skills",
  },
  {
    label: "Trade Requests",
    icon: <BsFillPeopleFill size={size} />,
    path: "/trades",
    description: "View sent/received trades",
  },
  {
    label: "Trade Status",
    icon: <RiProgress3Line size={size} />,
    path: "/trade-status",
    description: "Track Trade Status",
  },
  {
    label: "Messages",
    icon: <IoChatbubblesSharp size={size} />,
    path: "/messages",
    description: "Ongoing conversations",
  },
  {
    label: "Reputation",
    icon: <BsStarFill size={size} />,
    path: "/reputation",
    description: "View reviews received/given",
  },
  {
    label: "Settings",
    icon: <IoSettings size={size} />,
    path: "/settings",
    description: "Account/password, notifications",
  },
  {
    label: "Logout",
    icon: <IoIosLogOut size={size} />,
    path: "#",
    description: "Logout user",
  }
];

export { sideBarLinks }
