"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Platforms } from "@/types";
import Image from "next/image";

interface PlatformCardProps {
  platform: Platforms;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="bg-red-600 rounded-3xl transform transition duration-300 hover:scale-105 border-4"
      key={platform.slug}
    >
      <Image
        src={platform.logo}
        alt={platform.name}
        fill
        className="object-cover rounded-3xl cursor-pointer"
      />
    </AspectRatio>
  );
}
