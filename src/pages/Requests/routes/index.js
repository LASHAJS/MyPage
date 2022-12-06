import IPC from "../pages/IPC";
import Vacation from "../pages/vacation";
import Trip from "../pages/trip";
import CorpNumber from "../pages/corpnumber";
import VisitCard from "../pages/visitcard";
import IntAssessment from "../pages/intassessment";
import DrivingLicense from "../pages/drivinglicense";
import Request from "../pages";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import LuggageIcon from '@mui/icons-material/Luggage';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import StyleIcon from '@mui/icons-material/Style';
import CalculateIcon from '@mui/icons-material/Calculate';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

export const routes = [
  {
    path: "/IPC",
    title: "IPC",
    component: <IPC />,
    icon : <AddReactionIcon sx={{ fontSize: 60, }} />
  },
  {
    path: "/Vacation",
    title: "Vacation",
    component: <Vacation />,
    icon : <HouseboatIcon sx={{ fontSize: 60, }} />

  },
  {
    path: "/Trip",
    title: "Trip",
    component: <Trip />,
    icon : <LuggageIcon sx={{ fontSize: 60, }} />

  },
  {
    path: "/CorpNumber",
    title: "CorpNumber",
    component: <CorpNumber />,
    icon : <ContactPhoneIcon sx={{ fontSize: 60, }} />

  },
  {
    path: "/VisitCard",
    title: "VisitCard",
    component: <VisitCard />,
    icon : <StyleIcon sx={{ fontSize: 60, }} />

  },
  {
    path: "/IntAssessment",
    title: "IntAssessment",
    component: <IntAssessment />,
    icon : <CalculateIcon sx={{ fontSize: 60, }} />

  },
  {
    path: "/DrivingLicense",
    title: "DrivingLicense",
    component: <DrivingLicense />,
    icon : <DirectionsCarFilledIcon sx={{ fontSize: 60, }} />

  }

];
