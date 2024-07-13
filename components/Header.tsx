"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Bars3Icon, BugAntIcon, WalletIcon } from "@heroicons/react/24/outline";
import { FaucetButton } from "~~/components/scaffold-eth";
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
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
  {
    label: "Smart Wallet",
    href: "/safe",
    icon: <WalletIcon className="h-4 w-4" />,
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

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Scaffold-ETH</span>
            <span className="text-xs">Ethereum dev stack</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <DynamicWidget />
        <FaucetButton />
      </div>
    </div>
  );
};


// import Link from "next/link";
// import { Button } from "../ui/button";

// function FlagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }

// export function Header() {
//   return (
//     <header className="bg-background border-b px-4 py-3 sm:px-6">
//       <div className="flex items-center justify-between max-w-6xl mx-auto">
//         <div className="flex items-center gap-4">
//           <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
//             <FlagIcon className="w-6 h-6" />
//             <span className="sr-only">Forum</span>
//           </Link>
//           <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
//             <Link href="#" className="font-bold" prefetch={false}>
//               Home
//             </Link>
//             <Link href="#" className="text-muted-foreground" prefetch={false}>
//               Categories
//             </Link>
//             <Link href="#" className="text-muted-foreground" prefetch={false}>
//               Popular
//             </Link>
//             <Link href="#" className="text-muted-foreground" prefetch={false}>
//               Recent
//             </Link>
//             <Link href="#" className="text-muted-foreground" prefetch={false}>
//               Trending
//             </Link>
//           </nav>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" className="rounded-full">
//             <img src="/placeholder.svg" width="32" height="32" className="rounded-full border" alt="Avatar" />
//             <span className="sr-only">Toggle user menu</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }
