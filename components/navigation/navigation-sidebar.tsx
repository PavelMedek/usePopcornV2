"use client";

import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { HomeIcon, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Platforms, Series } from "@/types";

interface NNavigationSidebarProps {
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
}: NNavigationSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const pathname = usePathname();

  const handleIconClick = (index: number) => {
    setMenuOpen(false); // Close the menu when an icon is clicked
    setSearchQuery("");
  };

  const seriesRoutes = streamingPlatforms.map((item) => ({
    isActive: pathname === `/platforms/${item.slug}`,
    name: item.name,
    logo: item.logo,
    color: item.color,
    slug: item.slug,
  }));

  const platformName = pathname.split("/")[2];

  const filteredSeriesList = seriesList.filter((series) => {
    const matchesTitle = series.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPlatform = platformName
      ? series.platformSlug.toLowerCase() === platformName.toLowerCase()
      : true;
    return matchesTitle && matchesPlatform;
  });

  return (
    <div
      className={`flex ${menuOpen ? "flex-row" : "hidden lg:flex"} lg:flex-row`}
    >
      {/* Left Sidebar */}
      <div
        className={`bg-gray-800 w-20 min-h-screen ${
          menuOpen ? "block" : "hidden lg:block"
        }`}
      >
        <ScrollArea className="overflow-y-auto max-h-screen pt-16">
          <Link href={"/platforms"}>
            <div
              className="w-20 h-10 flex mb-8"
              onClick={() => setMenuOpen(false)}
            >
              <div
                className="w-1 h-14 rounded-r-full"
                style={{
                  backgroundColor:
                    pathname === "/platforms" ? "#a855f7" : "transparent",
                }}
              ></div>
              <div className="w-14 h-14 rounded-full ml-2 cursor-pointer bg-gray-900 grid place-items-center hover:bg-gray-600 transition-colors duration-300">
                <HomeIcon className="text-white w-11 h-11" />
              </div>
            </div>
          </Link>
          {seriesRoutes.map((platform, index) => (
            <Link href={`/platforms/${platform.slug}`} key={platform.slug}>
              <div
                className="w-20 h-10 flex mb-8"
                onClick={() => handleIconClick(index)}
              >
                <div
                  className="w-1 h-14 rounded-r-full"
                  style={{
                    backgroundColor: platform.isActive
                      ? platform.color
                      : "transparent",
                  }}
                ></div>
                <div className="w-14 h-14 rounded-full ml-2 cursor-pointer">
                  <img
                    src={platform.logo}
                    alt={platform.slug}
                    className="rounded-full w-14 h-14 object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>

      {/* Main Content Area */}
      <div
        className={`bg-gray-900 ${
          menuOpen ? "flex-1" : "w-64"
        } max-h-screen pt-16 pl-4 pr-4 flex flex-col`}
      >
        <div className="relative mb-4">
          <Search className="absolute top-2 left-2 text-gray-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="series-list overflow-y-auto flex-grow">
          {filteredSeriesList.map((series, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-3 mb-2 shadow-md transition-colors duration-300 hover:bg-gray-700"
            >
              <a
                href="#"
                className="block hover:text-gray-300 transition duration-300"
              >
                {series.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;
