"use client";

import { Series } from "@/types";
import SeriesCard from "./SeriesCard";

interface SeriesSectionProps {
  platform: string;
  series: Series[];
}

export default function SeriesSection({
  platform,
  series,
}: SeriesSectionProps) {
  return (
    <div key={platform} className="pb-8 pt-8 flex gap-4 flex-col">
      <div className="flex justify-between justify-items-start items-end">
        <h1 className="text-4xl font-extrabold dark:text-white">
          Best of {platform}
        </h1>
        <p className="cursor-pointer hover:underline">zobrazit další</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:sm:grid-cols-2 gap-4">
        {series.map((show) => (
          <SeriesCard key={show.slug} show={show} link={show.slug} />
        ))}
      </div>
    </div>
  );
}
