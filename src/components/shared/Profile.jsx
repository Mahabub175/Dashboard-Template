"use client";

import logo from "@/assets/images/Logo.png";
import { UserOutlined } from "@ant-design/icons";
import { AutoComplete, Avatar, Popover, Segmented } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { useTheme } from "@/provider/SystemProvider";
import { IoMdArrowDropdown } from "react-icons/io";

const Profile = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (value) => {
    setTheme(value);
  };

  return (
    <div className="flex justify-between items-center pb-2 -mx-10 lg:mx-0">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            height={40}
            width={40}
            className="w-full h-5"
          />
        </Link>
      </div>
      <div className="hidden lg:block relative">
        <AutoComplete placeholder="Search" size="large" className="!w-[30vw]" />
        <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-primary text-xl" />
      </div>
      <Segmented
        value={theme}
        className="!hidden !lg:block"
        style={{ marginBottom: 8 }}
        onChange={handleThemeChange}
        options={[
          {
            label: (
              <div className="flex items-center">
                <SunOutlined className="mr-2" />
                Light
              </div>
            ),
            value: "light",
          },
          {
            label: (
              <div className="flex items-center">
                <MoonOutlined className="mr-2" />
                Dark
              </div>
            ),
            value: "dark",
          },
        ]}
      />
      <div className="flex items-center gap-5">
        <Avatar icon={<FaRegBell />} />
        <Avatar className="size-20 md:size-40" icon={<UserOutlined />} />
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <div>
          <p className="font-semibold text-textColor">Benjamin</p>
        </div>
        <Avatar className="size-20 md:size-40" icon={<UserOutlined />} />
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default Profile;
