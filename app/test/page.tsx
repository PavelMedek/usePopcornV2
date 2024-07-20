"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { seriesList } from "@/lib/data.js";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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
        className="fixed top-0 right-0 lg:hidden p-4 z-50 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
        onClick={toggleMenu}
      >
        Toggle Menu
      </button>
      <div className={`flex lg:flex ${menuOpen ? "flex-row" : "hidden"}`}>
        {/* Left Sidebar */}
        <div className="bg-gray-800 w-16 min-h-screen ">
          <ScrollArea className="overflow-y-auto max-h-screen pt-16">
            {[...Array(4)].map((_, index) => (
              <div className="w-16 h-10 flex mb-6" key={index}>
                {activeIcon === index ? (
                  <div className="w-1 h-full bg-red-600"></div>
                ) : (
                  <div className="w-1 h-full bg-transparent"></div>
                )}
                <div
                  onClick={() => handleIconClick(index)}
                  className="w-11 h-11 bg-white rounded-full ml-1 cursor-pointer"
                ></div>
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
          {/* <h1 className="text-2xl font-bold mb-4">Seriály</h1> */}
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
          {/* <div className="relative rounded-3xl aspect-square xl:aspect-[2.4/1] bg-cover bg-opacity-60">
            {randomSeries ? (
              <>
                <Image
                  src={randomSeries.banner}
                  alt={randomSeries.title}
                  fill
                  className="rounded-3xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0D0C0F] rounded-3xl" />
                <div className="p-4 rounded-3xl mt-4 z-50 relative h-full flex flex-col justify-end xl:w-1/2">
                  <div className=" mb-4 flex justify-start">
                    <img
                      src={randomSeries.logo}
                      // src={"/shows/the-witcher-logo.png"}
                      alt={randomSeries.title}
                      className="h-36"
                    />
                  </div>
                  <div className="flex gap-1">
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
                  <p className="mt-4">{randomSeries.description}</p>
                  <Button className="w-1/3 mt-4" variant="secondary">
                    <Play />
                    Sledovat
                  </Button>
                </div>
              </>
            ) : (
              <div className="rounded-3xl object-cover bg-gray-700"></div>
            )}
          </div> */}
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
                  <p className="mt-4 text-base xl:text-lg">
                    {randomSeries.description}
                  </p>
                  <Button className="w-1/3 mt-4" variant="secondary">
                    <Play />
                    Sledovat
                  </Button>
                </div>
              </>
            ) : (
              <div className="rounded-3xl object-cover bg-gray-700"></div>
            )}
          </div>

          <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 pt-8">
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/netflix-logo.jpg"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/max-logo.avif"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/prime-logo.jpg"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/disney-logo.webp"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/hulu-logo.png"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/peacock-logo.jpg"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
            <AspectRatio
              ratio={1 / 1}
              className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
            >
              <Image
                src="/skyshowtime-logo.jpg"
                alt="Photo by Drew Beamer"
                fill
                className="object-cover rounded-3xl cursor-pointer"
              />
            </AspectRatio>
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
