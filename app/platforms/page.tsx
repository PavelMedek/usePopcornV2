import { seriesList, streamingPlatforms } from "@/lib/data.js";

import PageClient from "./PageClient";

export default function Home() {
  return (
    <PageClient
      seriesList={seriesList}
      streamingPlatforms={streamingPlatforms}
    />
  );
}
