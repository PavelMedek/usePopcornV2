"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Series } from "@/types";

interface BannerProps {
  series: Series | null;
}

export default function Banner({ series }: BannerProps) {
  return (
    <div className="relative rounded-3xl aspect-square xl:aspect-[2.4/1] bg-cover bg-opacity-60 overflow-hidden">
      {series ? (
        <>
          <Image
            src={series.banner}
            alt={series.title}
            fill
            className="rounded-3xl object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0D0C0F] rounded-3xl" />
          <div className="p-4 rounded-3xl z-50 relative h-full flex flex-col justify-end xl:w-1/2">
            <div className="mb-4 flex justify-start items-end h-24 md:h-36 xl:h-48 overflow-hidden">
              <img
                src={series.logo}
                alt={series.title}
                className="h-full max-w-full object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-1">
              <p className="text-xl mt-2">{series.genre[0]} •</p>
              <p className="text-xl mt-2">
                {series.seasons === 1
                  ? "1 řada"
                  : series.seasons >= 2 && series.seasons <= 4
                  ? `${series.seasons} řady`
                  : `${series.seasons} řad`}
              </p>
            </div>
            <p className="mt-4 text-base xl:text-lg hidden lg:block">
              {series.description}
            </p>
            <Button className="watch-button lg:w-1/2 w-full mt-4 flex items-center justify-center p-3 bg-gray-800 text-white font-bold rounded-full border-2 border-transparent hover:bg-gray-700 hover:border-purple-500 hover:scale-105 transition-transform duration-300">
              <Play className="mr-2" />
              Sledovat
            </Button>
          </div>
        </>
      ) : (
        <div className="rounded-3xl object-cover bg-red-700"></div>
      )}
    </div>
  );
}
