"use client";

import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { TbArrowBadgeRight } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { sidebarRoutes } from "@/routes/routes";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import upgrade from "@/assets/images/Upgrade.png";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = sidebarItemsGenerator(sidebarRoutes, pathname);

  const formattedSegment = pathname
    .split("/")
    .slice(-1)[0]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div
      className="relative bg-white border-r border-gray-200 drop-shadow-primary
    "
    >
      <Sider
        className="top-0 text-textColor"
        theme="light"
        trigger={null}
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onBreakpoint={(broken) => setCollapsed(broken)}
        onCollapse={(collapsedState) => setCollapsed(collapsedState)}
      >
        <div className="ml-6 mt-2">
          <h1 className="font-semibold">Menu</h1>
        </div>
        <Menu
          mode="inline"
          className="mt-5"
          items={sidebarItems}
          defaultSelectedKeys={formattedSegment}
        />

        <div className="p-5 lg:mt-44">
          <Image src={upgrade} alt="upgrade" className="cursor-pointer" />
        </div>
      </Sider>

      <div className="sidebar-toggle-button">
        <button
          className="-mr-1 bg-primary border border-gray-200 rounded-full text-black absolute top-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <TbArrowBadgeRight className="text-2xl" />
          ) : (
            <TbArrowBadgeRight className="rotate-180 text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
