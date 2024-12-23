import React from "react";
import Link from "next/link";

export const sidebarItemsGenerator = (items, pathname) => {
  return items.map((item) => {
    if (item.children) {
      return {
        key: item.name,
        icon: React.createElement(item.icon),
        label: <div className="text-sm font-semibold">{item.name}</div>,
        children: item.children.map((child) => ({
          key: child.name,
          icon: React.createElement(child.icon),
          label: (
            <Link
              href={`/${child.path}`}
              className={`hover:text-primary font-semibold text-sm text-textColor ${
                pathname === `/${child.path}` ? "text-primary" : ""
              }`}
            >
              {child.name}
            </Link>
          ),
        })),
      };
    }

    return {
      key: item.name,
      icon: React.createElement(item.icon),
      label: (
        <Link
          href={`/${item.path}`}
          className={`hover:text-primary text-textColor font-semibold text-sm ${
            pathname === `/${item.path}` ? "text-primary" : ""
          }`}
        >
          {item.name}
        </Link>
      ),
    };
  });
};
