import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-opacity-20
      "
      style={{
        backgroundImage:
          "url('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ieNRRUrBF5WHM2dWrDDNmg.jpeg')",
      }}
    >
      <Head>
        <title>usePopcorn</title>
      </Head>
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-between items-center text-center px-4 py-6">
        <div className="w-full flex justify-between items-center px-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            usePopcorn
          </h1>
          <Button asChild className="bg-black">
            <Link href="/login">Login</Link>
          </Button>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Váš spolehlivý průvodce světem seriálů
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            UsePopcorn je inovativní mobilní aplikace, která vám umožní
            jednoduše vyhledávat a streamovat vaše oblíbené seriály. Díky této
            uživatelsky přívětivé platformě budete mít okamžitý přístup k široké
            škále seriálů z celého světa.
          </p>
        </div>
      </div>
    </div>
  );
}
