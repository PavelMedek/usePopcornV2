"use client";

import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import React, { ReactChildren, ReactNode } from "react";
import { Platforms, Series } from "@/types";
import { Menu } from "lucide-react";
import useMenuStore from "@/hook/useMenuStore";

interface LayoutClientProps {
  seriesList: Series[];
  streamingPlatforms: Platforms[];
  children: ReactNode;
}

const LayoutClient = ({
  seriesList,
  streamingPlatforms,
  children,
}: LayoutClientProps) => {
  const { menuOpen, toggleMenu, setMenuOpen } = useMenuStore();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col lg:flex-row">
      <button
        className="fixed top-0 right-0 lg:hidden p-3 z-50 bg-gray-900 hover:bg-gray-700 transition-colors duration-300 rounded-full m-1 border-2 border-transparent hover:border-purple-500"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
      <NavigationSidebar
        menuOpen={menuOpen}
        seriesList={seriesList}
        setMenuOpen={setMenuOpen}
        streamingPlatforms={streamingPlatforms}
      />

      {/* Right Content Area */}
      <div
        className={`bg-gray-800 flex-1 min-h-screen lg:flex lg:min-h-screen lg:max-h-screen overflow-y-auto ${
          menuOpen ? "hidden lg:block" : "block"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutClient;
