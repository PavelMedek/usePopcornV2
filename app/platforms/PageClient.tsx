"use client";

import { useEffect, useState } from "react";
import { seriesList, streamingPlatforms } from "@/lib/data";
import Banner from "@/components/Banner";
import PlatformCard from "@/components/PlatformCard";
import SeriesSection from "@/components/SeriesSection";
import { Series } from "@/types";

export default function Home() {
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
    <div className="lg:pl-16 lg:pr-16 pr-4 pl-4 pt-16 w-full">
      <Banner series={randomSeries} />
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 pt-8">
        {streamingPlatforms.map((platform) => (
          <PlatformCard key={platform.slug} platform={platform} />
        ))}
      </div>
      {Object.keys(seriesByPlatform).map((platform) => (
        <SeriesSection
          key={platform}
          platform={platform}
          series={seriesByPlatform[platform]}
        />
      ))}
    </div>
  );
}
