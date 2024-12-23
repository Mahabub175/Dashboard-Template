import { CiClock2 } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import {
  IoBriefcase,
  IoPeople,
  IoTrophyOutline,
  IoWallet,
} from "react-icons/io5";
import { RiUserSettingsFill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";

export const sidebarRoutes = [
  {
    name: "Home",
    path: "home",
    icon: TbLayoutDashboardFilled,
  },
  {
    name: "Team",
    path: "team",
    icon: IoPeople,
  },
  {
    name: "Hire & Onboard",
    path: "hire-onboard",
    icon: IoBriefcase,
  },
  {
    name: "Payroll",
    icon: IoWallet,
    children: [
      {
        name: "Salary",
        path: "payroll/salary",
        icon: IoWallet,
      },
      {
        name: "Expenses",
        path: "payroll/expenses",
        icon: IoWallet,
      },
    ],
  },
  {
    name: "Time Tracking",
    icon: CiClock2,
    children: [
      {
        name: "Attendance",
        path: "time-tracking/attendance",
        icon: CiClock2,
      },
      {
        name: "Leave",
        path: "time-tracking/leave",
        icon: CiClock2,
      },
    ],
  },
  {
    name: "Benefits",
    path: "benefits",
    icon: IoTrophyOutline,
  },
  {
    name: "Notifications",
    path: "notifications",
    icon: FaRegBell,
  },
  {
    name: "Settings",
    path: "settings",
    icon: RiUserSettingsFill,
  },
];
