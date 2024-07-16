import React from "react";

const seriesList = [
  {
    title: "Breaking Bad",
    seasons: 5,
    episodes: 62,
    genre: "Crime, Drama, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    platform: "Netflix",
    slug: "breaking-bad",
  },
  {
    title: "Game of Thrones",
    seasons: 8,
    episodes: 73,
    genre: "Action, Adventure, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    platform: "Max",
    slug: "game-of-thrones",
  },
  {
    title: "Stranger Things",
    seasons: 4,
    episodes: 34,
    genre: "Drama, Fantasy, Horror",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Stranger_Things_logo.png",
    platform: "Netflix",
    slug: "stranger-things",
  },
  {
    title: "The Mandalorian",
    seasons: 2,
    episodes: 16,
    genre: "Action, Adventure, Fantasy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/6c/The_Mandalorian_Logo.jpg",
    platform: "Disney+",
    slug: "the-mandalorian",
  },
  {
    title: "The Crown",
    seasons: 5,
    episodes: 50,
    genre: "Biography, Drama, History",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Crown_logo.png",
    platform: "Netflix",
    slug: "the-crown",
  },
  {
    title: "Friends",
    seasons: 10,
    episodes: 236,
    genre: "Comedy, Romance",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg",
    platform: "Max",
    slug: "friends",
  },
  {
    title: "Westworld",
    seasons: 4,
    episodes: 36,
    genre: "Drama, Mystery, Sci-Fi",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Westworld_2016_Logo.png",
    platform: "Max",
    slug: "westworld",
  },
  {
    title: "The Witcher",
    seasons: 3,
    episodes: 24,
    genre: "Action, Adventure, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_title_card.png",
    platform: "Netflix",
    slug: "the-witcher",
  },
  {
    title: "Dark",
    seasons: 3,
    episodes: 26,
    genre: "Crime, Drama, Mystery",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/DarkNetflixPosterEnglish.jpg",
    platform: "Netflix",
    slug: "dark",
  },
  {
    title: "Black Mirror",
    seasons: 5,
    episodes: 22,
    genre: "Drama, Sci-Fi, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Black_Mirror_title_card.jpg",
    platform: "Netflix",
    slug: "black-mirror",
  },
  {
    title: "Fargo",
    seasons: 4,
    episodes: 41,
    genre: "Crime, Drama, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/Fargo_2014_Intertitle.png",
    platform: "Max",
    slug: "fargo",
  },
  {
    title: "Mindhunter",
    seasons: 2,
    episodes: 19,
    genre: "Crime, Drama, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Mindhunter_logo.png",
    platform: "Netflix",
    slug: "mindhunter",
  },
  {
    title: "The Boys",
    seasons: 3,
    episodes: 24,
    genre: "Action, Comedy, Crime",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/03/The_Boys_2019_title_card.png",
    platform: "Amazon Prime Video",
    slug: "the-boys",
  },
  {
    title: "Better Call Saul",
    seasons: 6,
    episodes: 63,
    genre: "Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Better_Call_Saul_logo.svg",
    platform: "Netflix",
    slug: "better-call-saul",
  },
  {
    title: "Chernobyl",
    seasons: 1,
    episodes: 5,
    genre: "Drama, History, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Chernobyl_2019_Miniseries.jpg",
    platform: "Max",
    slug: "chernobyl",
  },
  {
    title: "The Expanse",
    seasons: 6,
    episodes: 62,
    genre: "Drama, Mystery, Sci-Fi",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/The_Expanse_2015_Intertitle.png",
    platform: "Amazon Prime Video",
    slug: "the-expanse",
  },
  {
    title: "The Handmaid's Tale",
    seasons: 5,
    episodes: 56,
    genre: "Drama, Sci-Fi, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/82/The_Handmaid%27s_Tale_title_card.png",
    platform: "Hulu",
    slug: "the-handmaids-tale",
  },
  {
    title: "Peaky Blinders",
    seasons: 6,
    episodes: 36,
    genre: "Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/06/Peaky_Blinders_titlecard.jpg",
    platform: "Netflix",
    slug: "peaky-blinders",
  },
  {
    title: "Narcos",
    seasons: 3,
    episodes: 30,
    genre: "Biography, Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Narcos_title_card.png",
    platform: "Netflix",
    slug: "narcos",
  },
  {
    title: "The Umbrella Academy",
    seasons: 3,
    episodes: 30,
    genre: "Action, Adventure, Comedy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/85/The_Umbrella_Academy_%28TV_series%29.png",
    platform: "Netflix",
    slug: "the-umbrella-academy",
  },
  {
    title: "Rick and Morty",
    seasons: 6,
    episodes: 61,
    genre: "Animation, Adventure, Comedy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_and_Morty_opening_credits.png",
    platform: "Max",
    slug: "rick-and-morty",
  },
  {
    title: "Ozark",
    seasons: 4,
    episodes: 44,
    genre: "Crime, Drama, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Ozark_title_card.png",
    platform: "Netflix",
    slug: "ozark",
  },
  {
    title: "Succession",
    seasons: 4,
    episodes: 39,
    genre: "Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Succession_2018_Logo.png",
    platform: "Max",
    slug: "succession",
  },
  {
    title: "Money Heist",
    seasons: 5,
    episodes: 41,
    genre: "Action, Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/Money_Heist_title_card.jpg",
    platform: "Netflix",
    slug: "money-heist",
  },
  {
    title: "The Office",
    seasons: 9,
    episodes: 201,
    genre: "Comedy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/80/The_Office_US_Logo.svg",
    platform: "Peacock",
    slug: "the-office",
  },
  {
    title: "Parks and Recreation",
    seasons: 7,
    episodes: 125,
    genre: "Comedy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Parks_and_Recreation.png",
    platform: "Peacock",
    slug: "parks-and-recreation",
  },
  {
    title: "The Sopranos",
    seasons: 6,
    episodes: 86,
    genre: "Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/The_Sopranos_logo.png",
    platform: "Max",
    slug: "the-sopranos",
  },
  {
    title: "True Detective",
    seasons: 3,
    episodes: 24,
    genre: "Crime, Drama, Mystery",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/7/73/True_Detective_2014_Intertitle.png",
    platform: "Max",
    slug: "true-detective",
  },
  {
    title: "Sherlock",
    seasons: 4,
    episodes: 13,
    genre: "Crime, Drama, Mystery",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Sherlock_titlecard.jpg",
    platform: "Netflix",
    slug: "sherlock",
  },
  {
    title: "Dexter",
    seasons: 8,
    episodes: 96,
    genre: "Crime, Drama, Mystery",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Dexter_Title_Card.jpg",
    platform: "Showtime",
    slug: "dexter",
  },
  {
    title: "House of Cards",
    seasons: 6,
    episodes: 73,
    genre: "Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/House_of_Cards_logo.svg",
    platform: "Netflix",
    slug: "house-of-cards",
  },
  {
    title: "Brooklyn Nine-Nine",
    seasons: 8,
    episodes: 153,
    genre: "Comedy, Crime",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/Brooklyn_Nine-Nine_title_card.png",
    platform: "Peacock",
    slug: "brooklyn-nine-nine",
  },
  {
    title: "The Walking Dead",
    seasons: 11,
    episodes: 177,
    genre: "Drama, Horror, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/The_Walking_Dead_title_card.jpg",
    platform: "Netflix",
    slug: "the-walking-dead",
  },
  {
    title: "Mr. Robot",
    seasons: 4,
    episodes: 45,
    genre: "Crime, Drama, Thriller",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/Mr._Robot_Intertitle.png",
    platform: "Amazon Prime Video",
    slug: "mr-robot",
  },
  {
    title: "Homeland",
    seasons: 8,
    episodes: 96,
    genre: "Crime, Drama, Mystery",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/05/Homeland_2011_intertitle.png",
    platform: "Max",
    slug: "homeland",
  },
  {
    title: "The Marvelous Mrs. Maisel",
    seasons: 4,
    episodes: 34,
    genre: "Comedy, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Marvelous_Mrs._Maisel_title_card.png",
    platform: "Amazon Prime Video",
    slug: "the-marvelous-mrs-maisel",
  },
  {
    title: "The Big Bang Theory",
    seasons: 12,
    episodes: 279,
    genre: "Comedy, Romance",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/The_Big_Bang_Theory_title_card.png",
    platform: "Max",
    slug: "the-big-bang-theory",
  },
  {
    title: "How I Met Your Mother",
    seasons: 9,
    episodes: 208,
    genre: "Comedy, Romance",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/02/HowIMetYourMotherPoster.jpg",
    platform: "Hulu",
    slug: "how-i-met-your-mother",
  },
  {
    title: "Lost",
    seasons: 6,
    episodes: 121,
    genre: "Adventure, Drama, Fantasy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Lost_logo.svg",
    platform: "Hulu",
    slug: "lost",
  },
  {
    title: "Supernatural",
    seasons: 15,
    episodes: 327,
    genre: "Drama, Fantasy, Horror",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Supernatural_title_card.jpg",
    platform: "Netflix",
    slug: "supernatural",
  },
  {
    title: "The Flash",
    seasons: 8,
    episodes: 171,
    genre: "Action, Adventure, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/The_Flash_intertitle.png",
    platform: "Netflix",
    slug: "the-flash",
  },
  {
    title: "Arrow",
    seasons: 8,
    episodes: 170,
    genre: "Action, Adventure, Crime",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/Arrow_Logo.png",
    platform: "Netflix",
    slug: "arrow",
  },
  {
    title: "The 100",
    seasons: 7,
    episodes: 100,
    genre: "Drama, Mystery, Sci-Fi",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/The_100_title_card.png",
    platform: "Netflix",
    slug: "the-100",
  },
  {
    title: "Grey's Anatomy",
    seasons: 19,
    episodes: 420,
    genre: "Drama, Romance",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/ac/Grey%27s_Anatomy_title_card.jpg",
    platform: "Netflix",
    slug: "greys-anatomy",
  },
  {
    title: "Gotham",
    seasons: 5,
    episodes: 100,
    genre: "Action, Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/7/76/Gotham_title_card.png",
    platform: "Max",
    slug: "gotham",
  },
  {
    title: "The Good Place",
    seasons: 4,
    episodes: 53,
    genre: "Comedy, Drama, Fantasy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/3/33/The_Good_Place_title_card.png",
    platform: "Netflix",
    slug: "the-good-place",
  },
  {
    title: "Vikings",
    seasons: 6,
    episodes: 89,
    genre: "Action, Adventure, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Vikings_Title_Card.png",
    platform: "Netflix",
    slug: "vikings",
  },
  {
    title: "Lucifer",
    seasons: 6,
    episodes: 93,
    genre: "Crime, Drama, Fantasy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/5/50/Lucifer_-_Title_Card.png",
    platform: "Netflix",
    slug: "lucifer",
  },
  {
    title: "Prison Break",
    seasons: 5,
    episodes: 90,
    genre: "Action, Crime, Drama",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/1/15/Prison_Break_title_card.png",
    platform: "Hulu",
    slug: "prison-break",
  },
  {
    title: "Community",
    seasons: 6,
    episodes: 110,
    genre: "Comedy",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/Community_title.png",
    platform: "Netflix",
    slug: "community",
  },
];

function getRandomSeries(platform) {
  const platformSeries = seriesList.filter(
    (series) => series.platform === platform
  );
  const shuffled = platformSeries.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const NetflixSeries = getRandomSeries("Netflix");
const MaxSeries = getRandomSeries("Max");
const AmazonPrimeSeries = getRandomSeries("Amazon Prime Video");
const DisneySeries = getRandomSeries("Disney+");

const SeriesList = ({ series }) => (
  <ul>
    {series.map((show) => (
      <li key={show.slug}>
        <h3>{show.title}</h3>
        <p>Seasons: {show.seasons}</p>
        <p>Episodes: {show.episodes}</p>
        <p>Genre: {show.genre}</p>
        <img src={show.thumbnail} alt={`${show.title} thumbnail`} width="100" />
      </li>
    ))}
  </ul>
);

export default function Home() {
  return (
    <div>
      <h2>Netflix Series</h2>
      {NetflixSeries.map((show) => (
        <li key={show.slug}>
          <h3>{show.title}</h3>
          <p>Seasons: {show.seasons}</p>
          <p>Episodes: {show.episodes}</p>
          <p>Genre: {show.genre}</p>
          <img
            src={show.thumbnail}
            alt={`${show.title} thumbnail`}
            width="100"
          />
        </li>
      ))}

      <h2>Max Series</h2>
      <SeriesList series={MaxSeries} />

      <h2>Amazon Prime Video Series</h2>
      <SeriesList series={AmazonPrimeSeries} />

      <h2>Disney+ Series</h2>
      <SeriesList series={DisneySeries} />
    </div>
  );
}
