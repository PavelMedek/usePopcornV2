"use client";

import { Series } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface SeriesCardProps {
  show: Series;
  link: string;
}

export default function SeriesCard({ show, link }: SeriesCardProps) {
  const {
    title,
    thumbnail,
    genre = [],
    seasons = 0,
    platformSlug,
    slug,
  } = show;

  const getSeasonsText = (seasons: number): string => {
    if (seasons === 1) return "1 řada";
    if (seasons >= 2 && seasons <= 4) return `${seasons} řady`;
    return `${seasons} řad`;
  };

  return (
    <Link href={`/platforms/${platformSlug}/${link}`}>
      <div
        key={slug}
        className="cursor-pointer relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 group aspect-[16/9]"
      >
        <Image
          src={thumbnail || "/default-thumbnail.jpg"}
          alt={`${title} thumbnail`}
          fill
          className="w-full h-full block rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-b from-transparent to-[#0D0C0F] bg-opacity-60 transform transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          <h3 className="m-0 text-white font-bold">{title}</h3>
          <div className="flex gap-5">
            <p className="m-0 text-white">{genre[0] || "Unknown Genre"}</p>
            <p>{getSeasonsText(seasons)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
