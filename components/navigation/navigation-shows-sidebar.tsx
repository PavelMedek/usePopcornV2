import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Search } from "lucide-react";
import { Series } from "@/types";
import SearchBar from "./search-bar";
import SeriesList from "./navigation-series-list";

interface NavigationSidebarShowProps {
  menuOpen: boolean;
  setSearchQuery: (arg0: string) => void;
  searchQuery: string;
  platformName: string;
  seriesList: Series[];
  handleIconClick: (arg0: number) => void;
}

const NavigationShowSidebar: React.FC<NavigationSidebarShowProps> = ({
  menuOpen,
  setSearchQuery,
  searchQuery,
  platformName,
  seriesList,
  handleIconClick,
}) => {
  const filteredSeriesList = seriesList.filter((series) => {
    const title = series.title || "";
    const platformSlug = series.platformSlug || "";

    const matchesTitle = title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPlatform = platformName
      ? platformSlug.toLowerCase() === platformName.toLowerCase()
      : true;

    return matchesTitle && matchesPlatform;
  });

  return (
    <div
      className={`bg-gray-900 ${
        menuOpen ? "flex-1" : "w-64"
      } max-h-screen pt-16 pl-4 pr-4 flex flex-col`}
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SeriesList
        seriesList={filteredSeriesList}
        handleIconClick={handleIconClick}
      />
    </div>
  );
};

export default NavigationShowSidebar;
