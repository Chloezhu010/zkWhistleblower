"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
    icon: null,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: null,
  },
  {
    label: "Popular",
    href: "/popular",
    icon: null,
  },
  {
    label: "Recent",
    href: "/recent",
    icon: null,
  },
  {
    label: "Trending",
    href: "/trending",
    icon: null,
  },

];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${isActive ? "bg-secondary shadow-md" : ""
                } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export const Header = () => {

  return (
    <header className="bg-background border-b px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="navbar-start w-auto lg:w-1/2">
          {/* <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">

        </Link> */}
          <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
            <HeaderMenuLinks />
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <DynamicWidget />
        </div>
      </div>
    </header>
  );
};
