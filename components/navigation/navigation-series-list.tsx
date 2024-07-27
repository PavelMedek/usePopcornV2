import { Series } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SeriesItemProps {
  series: Series;
  platformName: string;
  active: boolean;
}

interface SeriesListProps {
  seriesList: Series[];
}

const SeriesItem: React.FC<SeriesItemProps> = ({ series, active }) => {
  return (
    <div
      className={`${
        active ? "bg-gray-700" : "bg-gray-800"
      } rounded-lg p-3 mb-2 shadow-md transition-colors duration-300 hover:bg-gray-700`}
    >
      <Link
        href={`/platforms/${series.platformSlug}/${series.link}/`}
        className="block hover:text-gray-300 transition duration-300"
      >
        {series.title}
      </Link>
    </div>
  );
};

const SeriesList: React.FC<SeriesListProps> = ({ seriesList }) => {
  const pathname = usePathname();

  const [_, platform, platformName, neco, articleOrEpisode] =
    pathname.split("/");

  const routes = seriesList?.map((item) => ({
    link: `/${item.slug}`,
    title: item.title,
    active: pathname === `/platforms/${platformName}/${item.slug}`,
    platformSlug: item.platformSlug,
  }));

  return (
    <div className="series-list overflow-y-auto flex-grow">
      {routes.map((series, index) => (
        <SeriesItem
          key={index}
          series={series}
          platformName={platformName}
          active={series.active}
        />
      ))}
    </div>
  );
};

export default SeriesList;
