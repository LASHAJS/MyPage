import Main from "../pages/General";
import Insurance from "../pages/Advanced/insurance";
import IPCInvests from "../pages/Advanced/IPCInvests";
import Vocation from "../pages/Advanced/Vacations";
import PCBClubs from "../pages/Advanced/PCBClubs";
import Poll from "../pages/Advanced/Poll";
import CurrentSeminars from "../pages/Trainings/CurrentSeminars";
import AttendedSeminars from "../pages/Trainings/AttendedSeminars";
import TestResults from "../pages/Trainings/TestResults";
import Requests from "../pages/Requests";
import MyIntermediateRate from "../pages/MyIntermediateRate";
import HRDocumentation from "../pages/HRDocumentation";
import Login from "../pages/login/index";
import Dashboard from "../../src/components/dashboard";
import Request from '../pages/Requests/pages/index'

export const routes = [
  {
    id:1,
    path: "/",
    title: "main",
    component: <Dashboard />,
  },
  {
    id:2,
    path: "/Advanced",
    title: "Advanced",
    children: [
      {
        id:3,
        path: "/insurance",
        title: "insurance",
        component: <Insurance />,
      },
      {
        id:4,
        path: "/vocation",
        title: "vocation",
        component: <Vocation />,
      },
      {
        id:5,
        path: "/IPCInvests",
        title: "IPCInvests",
        component: <IPCInvests />,
      },
      {
        id:6,
        path: "/Poll",
        title: "Poll",
        component: <Poll />,
      },
      {
        id:7,
        path: "/PCBClubs",
        title: "PCBClubs",
        component: <PCBClubs />,
      },
    ],
  },
  {
    id:8,
    path: "/trainings",
    title: "trainings",
    children: [
      {
        id:9,
        path: "/CurrentSeminars",
        title: "currentSeminars",
        component: <CurrentSeminars />,
      },
      {
        id:10,
        path: "/AttendedSeminars",
        title: "attendedSeminars",
        component: <AttendedSeminars />,
      },
      {
        id:11,
        path: "/TestResults",
        title: "testResults",
        component: <TestResults />,
      },
    ],
  },
  {
    id:12,
    path: "/Requests",
    title: "requests",
    component: <Requests />,
  },
  {
    id:13,
    path: "/HRDocumentation",
    title: "HRDocumentation",
    component: <HRDocumentation />,
  },
  {
    id:14,
    path: "/MyIntermediateRate",
    title: "myIntermediateRate",
    component: <MyIntermediateRate />,
  },

];
