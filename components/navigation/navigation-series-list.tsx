import { Series } from "@/types";

interface SeriesItemProps {
  series: Series;
}

interface SeriesListProps {
  seriesList: Series[];
}

const SeriesItem: React.FC<SeriesItemProps> = ({ series }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-3 mb-2 shadow-md transition-colors duration-300 hover:bg-gray-700">
      <a href="#" className="block hover:text-gray-300 transition duration-300">
        {series.title}
      </a>
    </div>
  );
};

const SeriesList: React.FC<SeriesListProps> = ({ seriesList }) => {
  return (
    <div className="series-list overflow-y-auto flex-grow">
      {seriesList.map((series, index) => (
        <SeriesItem key={index} series={series} />
      ))}
    </div>
  );
};

export default SeriesList;
