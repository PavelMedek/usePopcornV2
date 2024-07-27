"use client";

import { Series } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface SeriesCardProps {
  show: Series;
  link: string;
}

export default function SeriesCard({ show, link }: SeriesCardProps) {
  return (
    <Link href={`/platforms/${show.platformSlug}/${link}`}>
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
            <p className="m-0 text-white">{show.genre[0]}</p>
            <p>
              {show.seasons === 1
                ? "1 řada"
                : show.seasons >= 2 && show.seasons <= 4
                ? `${show.seasons} řady`
                : `${show.seasons} řad`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
