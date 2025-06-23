import { GrAppsRounded, GrCatalog } from "react-icons/gr";
import { BsFillPeopleFill, BsStarFill } from "react-icons/bs";
import { IoChatbubblesSharp,IoSettings  } from "react-icons/io5";

const sideBarLinks = (size = 15) => [
  {
    label: "Overview",
    icon: <GrAppsRounded size={size} />,
    path: "/",
    description: "Personalized feed or skill suggestions",
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
  }
];

export { sideBarLinks }
