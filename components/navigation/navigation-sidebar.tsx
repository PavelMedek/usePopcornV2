"use client";

import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { HomeIcon, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Platforms, Series } from "@/types";
import NavigationPlatformSidebar from "./navigation-platform-sidebar";
import NavigationShowSidebar from "./navigation-shows-sidebar";

interface NavigationSidebarProps {
  menuOpen: boolean;
  setMenuOpen: (arg0: boolean) => void;
  streamingPlatforms: Platforms[];
  seriesList: Series[];
}

const NavigationSidebar = ({
  menuOpen,
  setMenuOpen,
  streamingPlatforms,
  seriesList,
}: NavigationSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const pathname = usePathname();

  const handleIconClick = (index: number) => {
    setMenuOpen(false); // Close the menu when an icon is clicked
    setSearchQuery("");
  };

  const platformName = pathname.split("/")[2];

  return (
    <div
      className={`flex ${menuOpen ? "flex-row" : "hidden lg:flex"} lg:flex-row`}
    >
      <NavigationPlatformSidebar
        handleIconClick={handleIconClick}
        menuOpen={menuOpen}
        pathname={pathname}
        setMenuOpen={setMenuOpen}
        streamingPlatforms={streamingPlatforms}
      />

      <NavigationShowSidebar
        handleIconClick={handleIconClick}
        menuOpen={menuOpen}
        platformName={platformName}
        searchQuery={searchQuery}
        seriesList={seriesList}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default NavigationSidebar;
