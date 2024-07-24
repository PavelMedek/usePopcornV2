import { seriesList, streamingPlatforms } from "@/lib/data.js";

import PageClient from "./PageClient";

export default function Home() {
  return (
    <PageClient
      // @ts-ignore
      seriesList={seriesList}
      streamingPlatforms={streamingPlatforms}
    />
  );
}
