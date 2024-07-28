"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart } from "lucide-react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PlatformNamePageProps {
  params: {
    platformName: string;
    showName: string;
  };
}

export default function Home({ params }: PlatformNamePageProps) {
  const { platformName, showName } = params;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>(
    searchParams.get("tab") || "prehled"
  );

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    router.push(url.toString());
  };

  useEffect(() => {
    if (!searchParams.get("tab")) {
      handleTabChange("prehled");
    }

    const handlePopState = () => {
      const currentTab =
        new URLSearchParams(window.location.search).get("tab") || "prehled";
      setCurrentTab(currentTab);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[30rem]">
        <Image
          src="/shows/sherlock-banner.jpg"
          fill
          alt="alt"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 z-10" />
      </div>

      <div className="lg:pl-16 lg:pr-16 pr-4 pl-4 relative z-20">
        <div className="flex flex-col gap-3 pb-11 mt-[-200px]">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold uppercase">
              Game of Thrones
            </h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Heart size={40} className="" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-white h-9">
              Badge
            </Badge>
            <Badge variant="outline" className="text-white h-9">
              Badge
            </Badge>
            <Badge variant="outline" className="text-white h-9">
              Badge
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AspectRatio
              ratio={16 / 9}
              className="backdrop-blur-sm bg-black/30 rounded-2xl flex justify-start items-center"
            >
              <div className="transform -rotate-90">
                <h1 className="text-base uppercase text-[#4C4158]">release</h1>
              </div>
              <p className="text-2xl font-semibold w-full text-center">2023</p>
            </AspectRatio>
            <AspectRatio
              ratio={16 / 9}
              className="backdrop-blur-sm bg-black/30 rounded-2xl flex justify-start items-center"
            >
              <div className="transform -rotate-90">
                <h1 className="text-base uppercase text-[#4C4158]">release</h1>
              </div>
              <p className="text-2xl font-semibold w-full text-center">2023</p>
            </AspectRatio>
            <AspectRatio
              ratio={16 / 9}
              className="backdrop-blur-sm bg-black/30 rounded-2xl flex justify-start items-center"
            >
              <div className="transform -rotate-90">
                <h1 className="text-base uppercase text-[#4C4158]">release</h1>
              </div>
              <p className="text-2xl font-semibold w-full text-center">2023</p>
            </AspectRatio>
            <AspectRatio
              ratio={16 / 9}
              className="backdrop-blur-sm bg-black/30 rounded-2xl flex justify-start items-center"
            >
              <div className="transform -rotate-90">
                <h1 className="text-base uppercase text-[#4C4158]">release</h1>
              </div>
              <p className="text-2xl font-semibold w-full text-center">2023</p>
            </AspectRatio>
          </div>
        </div>

        <div>
          <Tabs
            value={currentTab}
            onValueChange={handleTabChange}
            className="w-full pb-11"
          >
            <TabsList className="bg-gray-900 text-white w-full">
              <TabsTrigger className="w-1/3" value="prehled">
                Přehled
              </TabsTrigger>
              <TabsTrigger className="w-1/3" value="epizody">
                Epizody
              </TabsTrigger>
              <TabsTrigger className="w-1/3" value="clanky">
                Články
              </TabsTrigger>
            </TabsList>
            <TabsContent value="prehled">ahoj</TabsContent>
            <TabsContent value="epizody">Epizody</TabsContent>
            <TabsContent value="clanky">Články</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
