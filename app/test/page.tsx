"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useEffect, useState } from "react";
import { seriesList, streamingPlatforms } from "@/lib/data.js";
import { Button } from "@/components/ui/button";
import { Play, HomeIcon, Menu } from "lucide-react";

interface Series {
  slug: string;
  title: string;
  genre: string;
  platform: string;
  thumbnail: string;
  seasons: number;
  banner: string;
  description: string;
  logo: string;
}

interface Platforms {
  name: string;
  logo: string;
  color: string;
  slug: string;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeIcon, setActiveIcon] = useState<number>(0);
  const [seriesByPlatform, setSeriesByPlatform] = useState<
    Record<string, Series[]>
  >({});
  const [randomSeries, setRandomSeries] = useState<Series | null>(null);

  function getRandomSeries(platform: string): Series[] {
    const platformSeries = seriesList.filter(
      (series) => series.platform === platform
    );
    const shuffled = platformSeries.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }
  function getRandomSeriesOne(): Series {
    const shuffled = seriesList.sort(() => 0.5 - Math.random());
    return shuffled[0];
  }

  const handleIconClick = (index: number) => {
    setActiveIcon(index);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Filter the seriesList based on the search query
  const filteredSeriesList = seriesList.filter((series) =>
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const platforms = [...new Set(seriesList.map((series) => series.platform))];
    const seriesSelection: Record<string, Series[]> = {};

    platforms.forEach((platform) => {
      seriesSelection[platform] = getRandomSeries(platform);
    });

    setSeriesByPlatform(seriesSelection);
    setRandomSeries(getRandomSeriesOne());
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col lg:flex-row">
      <button
        className="fixed top-0 right-0 lg:hidden p-4 z-50 bg-gray-900 hover:bg-gray-700 transition-colors duration-300 rounded-full m-1"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
      <div className={`flex lg:flex ${menuOpen ? "flex-row" : "hidden"}`}>
        {/* Left Sidebar */}
        <div className="bg-gray-800 w-20 min-h-screen ">
          <ScrollArea className="overflow-y-auto max-h-screen pt-16">
            <div className="w-20 h-10 flex mb-8">
              <div className="w-1 h-14 bg-transparent"></div>
              <div className="w-14 h-14 rounded-full ml-2 cursor-pointer bg-gray-900 grid place-items-center hover:bg-gray-600 transition-colors duration-300">
                <HomeIcon className="text-white w-11 h-11" />
              </div>
            </div>
            {streamingPlatforms.map((platform, index) => (
              <div className="w-20 h-10 flex mb-8" key={index}>
                {activeIcon === index ? (
                  <div
                    className="w-1 h-14 rounded-r-full"
                    style={{
                      backgroundColor: platform.color,
                    }}
                  ></div>
                ) : (
                  <div className="w-1 h-14 bg-transparent"></div>
                )}
                <div
                  onClick={() => handleIconClick(index)}
                  className="w-14 h-14 rounded-full ml-2 cursor-pointer"
                >
                  <img
                    src={platform.logo}
                    alt={platform.slug}
                    className="rounded-full w-14 h-14 object-cover"
                  />
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Main Content Area */}
        <div
          className={`bg-gray-900 ${
            menuOpen ? "flex-1" : "w-64"
          } max-h-screen pt-16 pl-4 pr-4 flex flex-col`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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

      {/* Right Content Area */}
      <div
        className={`bg-gray-800 flex-1 min-h-screen ${
          menuOpen ? "hidden" : "block"
        }  lg:flex lg:min-h-screen lg:max-h-screen lg:pl-16 lg:pr-16 pr-4 pl-4 pt-16  overflow-y-auto`}
      >
        <div className=" w-full">
          <div className="relative rounded-3xl aspect-square xl:aspect-[2.4/1] bg-cover bg-opacity-60 overflow-hidden">
            {randomSeries ? (
              <>
                <Image
                  src={randomSeries.banner}
                  alt={randomSeries.title}
                  fill
                  className="rounded-3xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0D0C0F] rounded-3xl" />
                <div className="p-4 rounded-3xl z-50 relative h-full flex flex-col justify-end xl:w-1/2">
                  <div className="mb-4 flex justify-start items-end h-24 md:h-36 xl:h-48 overflow-hidden">
                    <img
                      src={randomSeries.logo}
                      alt={randomSeries.title}
                      className="h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <p className="text-xl mt-2">
                      {randomSeries.genre.split(", ")[0]} •
                    </p>
                    <p className="text-xl mt-2">
                      {randomSeries.seasons === 1
                        ? "1 řada"
                        : randomSeries.seasons >= 2 && randomSeries.seasons <= 4
                        ? `${randomSeries.seasons} řady`
                        : `${randomSeries.seasons} řad`}
                    </p>
                  </div>
                  <p className="mt-4 text-base xl:text-lg hidden lg:block">
                    {randomSeries.description}
                  </p>
                  <Button className="watch-button w-1/3 mt-4 flex items-center justify-center p-3 bg-gray-800 text-white font-bold rounded-full border-2 border-transparent hover:bg-gray-700 hover:border-purple-500 hover:scale-105 transition-transform duration-300">
                    <Play className="mr-2" />
                    Sledovat
                  </Button>
                </div>
              </>
            ) : (
              <div className="rounded-3xl object-cover bg-gray-700"></div>
            )}
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 pt-8">
            {streamingPlatforms.map((platform) => (
              <AspectRatio
                ratio={1 / 1}
                className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
                key={platform.slug}
              >
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  fill
                  className="object-cover rounded-3xl cursor-pointer"
                />
              </AspectRatio>
            ))}
          </div>
          {/* Cards Area */}
          {Object.keys(seriesByPlatform).map((platform) => (
            <div key={platform} className="pb-8 pt-8 flex gap-4 flex-col">
              <div className=" flex justify-between justify-items-start items-end">
                <h1 className="text-4xl font-extrabold dark:text-white">
                  Best of {platform}
                </h1>
                <p className="cursor-pointer hover:underline">zobrazit další</p>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:sm:grid-cols-2 gap-4 ">
                {seriesByPlatform[platform].map((show) => (
                  <div
                    key={show.slug}
                    className="cursor-pointer relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 group aspect-[16/9]"
                  >
                    <Image
                      src={show.thumbnail}
                      alt={`${show.title} thumbnail`}
                      fill
                      className="w-full h-full block rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-b from-transparent to-[#0D0C0F] bg-opacity-60 transform transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                      <h3 className="m-0 text-white font-bold">{show.title}</h3>
                      <div className="flex gap-5">
                        <p className="m-0 text-white">
                          {show.genre.split(", ")[0]}
                        </p>
                        <p>
                          <p>
                            {show.seasons === 1
                              ? "1 řada"
                              : show.seasons >= 2 && show.seasons <= 4
                              ? `${show.seasons} řady`
                              : `${show.seasons} řad`}
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
