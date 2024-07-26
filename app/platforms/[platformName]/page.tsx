"use client";

import Banner from "@/components/Banner";
import { useEffect, useState } from "react";

import { seriesList, streamingPlatforms } from "@/lib/data.js";
import { Series } from "@/types";
import SeriesSection from "@/components/SeriesSection";

interface PlatformNamePageProps {
  params: {
    platformName: string;
  };
}

export default function Home({ params }: PlatformNamePageProps) {
  const { platformName } = params;

  const [randomSeries, setRandomSeries] = useState<Series | null>(null);
  const [sortedGenres, setSortedGenres] = useState<
    { genre: string; series: Series[] }[]
  >([]);

  useEffect(() => {
    // Filtrujeme seriály podle platformy
    const filteredSeries = seriesList.filter(
      (series) => series.platformSlug === platformName
    );

    // Vybereme náhodný seriál z filtrováného pole
    if (filteredSeries.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredSeries.length);
      setRandomSeries(filteredSeries[randomIndex]);
    }

    // Rozdělíme seriály podle žánrů
    const genres: Record<string, Series[]> = {};

    filteredSeries.forEach((series) => {
      series.genre.forEach((genre) => {
        if (!genres[genre]) {
          genres[genre] = [];
        }
        genres[genre].push(series);
      });
    });

    // Funkce pro získání tří náhodných seriálů
    const getRandomSeries = (series: Series[], count: number): Series[] => {
      const shuffled = series.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    // Seřadíme žánry podle počtu seriálů
    const genresWithSeries = Object.keys(genres).map((genre) => ({
      genre,
      series: getRandomSeries(genres[genre], 3),
    }));

    genresWithSeries.sort((a, b) => b.series.length - a.series.length);

    setSortedGenres(genresWithSeries);
  }, [platformName]);

  return (
    <div className="lg:pl-16 lg:pr-16 pr-4 pl-4 pt-16 w-full">
      <Banner series={randomSeries} />
      {sortedGenres.map(({ genre, series }) => (
        <SeriesSection key={genre} platform={genre} series={series} />
      ))}
    </div>
  );
}
