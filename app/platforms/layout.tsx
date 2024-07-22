"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useEffect, useState } from "react";
import { seriesList, streamingPlatforms } from "@/lib/data.js";
import { Button } from "@/components/ui/button";
import { Play, HomeIcon, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeIcon, setActiveIcon] = useState<number>(0);
  const [seriesByPlatform, setSeriesByPlatform] = useState<
    Record<string, Series[]>
  >({});
  const [randomSeries, setRandomSeries] = useState<Series | null>(null);

  const pathname = usePathname();

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

  const seriesRoutes = streamingPlatforms.map((item) => ({
    isActive: pathname === `/platforms/${item.slug}`,
    name: item.name,
    logo: item.logo,
    color: item.color,
    slug: item.slug,
  }));

  console.log(seriesRoutes);

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
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
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
                <Link href={"/platforms"}>
                  <div
                    className="w-20 h-10 flex mb-8"
                    onClick={() => setMenuOpen((prev) => !prev)}
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
                  <Link href={`/platforms/${platform.slug}`}>
                    <div
                      className="w-20 h-10 flex mb-8"
                      key={index}
                      onClick={() => setMenuOpen((prev) => !prev)}
                    >
                      <div
                        className="w-1 h-14 rounded-r-full"
                        style={{
                          backgroundColor: platform.isActive
                            ? platform.color
                            : "transparent",
                        }}
                      ></div>
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
            }  lg:flex lg:min-h-screen lg:max-h-screen overflow-y-auto`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default PlatformLayout;
