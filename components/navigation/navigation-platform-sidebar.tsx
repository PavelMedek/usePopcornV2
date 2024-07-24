import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { HomeIcon, LogOut } from "lucide-react";
import { Platforms } from "@/types";
import NavigationPlatformItem from "./navigation-platform-item";

interface NavigationSidebarPlatformProps {
  menuOpen: boolean;
  setMenuOpen: (arg0: boolean) => void;
  pathname: string;
  streamingPlatforms: Platforms[];
  handleIconClick: (arg0: number) => void;
}

const NavigationPlatformSidebar = ({
  menuOpen,
  setMenuOpen,
  pathname,
  streamingPlatforms,
  handleIconClick,
}: NavigationSidebarPlatformProps) => {
  const platformRoutes = streamingPlatforms.map((item) => ({
    isActive: pathname === `/platforms/${item.slug}`,
    name: item.name,
    logo: item.logo,
    color: item.color,
    slug: item.slug,
  }));

  return (
    <div
      className={`bg-gray-800 w-20 min-h-screen ${
        menuOpen ? "block" : "hidden lg:block"
      }`}
    >
      <ScrollArea className="overflow-y-auto max-h-screen pt-16">
        <NavigationPlatformItem
          isActive={pathname === "/platforms"}
          href="/platforms"
          icon={<HomeIcon className="text-white w-11 h-11" />}
          color="#a855f7"
          onClick={() => setMenuOpen(false)}
        />
        {platformRoutes.map((platform, index) => (
          <NavigationPlatformItem
            key={platform.slug}
            isActive={platform.isActive}
            href={`/platforms/${platform.slug}`}
            logo={platform.logo}
            color={platform.color}
            onClick={() => handleIconClick(index)}
          />
        ))}
        <NavigationPlatformItem
          isActive={pathname === "/"}
          href="/"
          icon={<LogOut className="text-white w-11 h-11" />}
          color="#a855f7"
          onClick={() => setMenuOpen(false)}
        />
      </ScrollArea>
    </div>
  );
};

export default NavigationPlatformSidebar;
