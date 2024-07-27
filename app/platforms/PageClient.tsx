"use client";

import { useEffect, useState } from "react";
import { seriesList, streamingPlatforms } from "@/lib/data";
import Banner from "@/components/Banner";
import PlatformCard from "@/components/PlatformCard";
import SeriesSection from "@/components/SeriesSection";
import { Platforms, Series } from "@/types";

interface PageClientProps {
  seriesList: Series[];
  streamingPlatforms: Platforms[];
}

export default function Home({
  seriesList,
  streamingPlatforms,
}: PageClientProps) {
  const [seriesByPlatform, setSeriesByPlatform] = useState<
    Record<string, Series[]>
  >({});
  const [sortedPlatforms, setSortedPlatforms] = useState<Platforms[]>([]);
  const [randomSeries, setRandomSeries] = useState<Series | null>(null);

  function getRandomSeries(platform: string): Series[] {
    const normalizedPlatform = platform.toLowerCase();
    const platformSeries = seriesList.filter(
      (series) =>
        series.platformSlug &&
        series.platformSlug.toLowerCase() === normalizedPlatform
    );
    console.log(`Platform Series for ${platform}:`, platformSeries);
    const shuffled = platformSeries.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  function getRandomSeriesOne(): Series {
    const shuffled = seriesList.sort(() => 0.5 - Math.random());
    return shuffled[0];
  }

  useEffect(() => {
    console.log("Series List:", seriesList);
    console.log("Streaming Platforms:", streamingPlatforms);

    if (!seriesList.length) {
      console.error("Series List is empty");
      return;
    }

    const platformCounts: Record<string, number> = {};
    seriesList.forEach((series) => {
      if (series.platformSlug) {
        const normalizedPlatform = series.platformSlug.toLowerCase();
        platformCounts[normalizedPlatform] =
          (platformCounts[normalizedPlatform] || 0) + 1;
      }
    });

    console.log("Platform Counts:", platformCounts);

    const sortedPlatformsList = streamingPlatforms
      .slice()
      .sort(
        (a, b) => (platformCounts[b.slug] || 0) - (platformCounts[a.slug] || 0)
      );

    console.log("Sorted Platforms List:", sortedPlatformsList);

    const seriesSelection: Record<string, Series[]> = {};
    sortedPlatformsList.forEach((platform) => {
      seriesSelection[platform.slug] = getRandomSeries(platform.slug);
    });

    console.log("Series Selection:", seriesSelection);

    setSeriesByPlatform(seriesSelection);
    setSortedPlatforms(sortedPlatformsList);
    setRandomSeries(getRandomSeriesOne());
  }, [seriesList, streamingPlatforms]);

  return (
    <div className="lg:pl-16 lg:pr-16 pr-4 pl-4 pt-16 w-full">
      <Banner series={randomSeries} />
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 pt-8">
        {sortedPlatforms.map((platform) => (
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
