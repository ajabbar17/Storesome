"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconPlus,
  IconUserBolt,
  IconParkingCircle,
  IconPackage,
  IconUser,
  IconLogin,
  IconPrinter,
  IconArchive
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/Utils";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Packaging Bird",
      href: "/packagingbird",
      icon: (
        <IconParkingCircle className=" text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Box Breeders",
      href: "/boxbreeders",
      icon: (
        <IconPackage className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Print Your Minds",
      href: "/printyourminds",
      icon: (
        <IconPrinter className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Archive",
      href: "/archive",
      icon: (
        <IconArchive className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Users",
      href: "/users",
      icon: (
        <IconUser className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Login",
      href: "/login",
      icon: (
        <IconLogin className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "fixed flex flex-col md:flex-row bg-black  flex-1  mx-auto z-40  overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Store Some
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
