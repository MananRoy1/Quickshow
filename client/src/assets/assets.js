import logo from "./logo.svg";
import marvelLogo from "./marvelLogo.svg";
import googlePlay from "./googlePlay.svg";
import appStore from "./appStore.svg";
import screenImage from "./screenImage.svg";
import profile from "./profile.png";

export const assets = {
  logo,
  marvelLogo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

export const dummyTrailers = [
  {
    image: "https://i.ytimg.com/vi/ej3ioOneTy8/maxresdefault.jpg",
    videoUrl: "https://youtu.be/ej3ioOneTy8",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
  },
];

const dummyCastsData = [
  {
    name: "Milla Jovovich",
    profile_path:
      "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
  },
  {
    name: "Dave Bautista",
    profile_path:
      "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
  },
  {
    name: "Arly Jover",
    profile_path:
      "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
  },
  {
    name: "Amara Okereke",
    profile_path:
      "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
  },
  {
    name: "Fraser James",
    profile_path:
      "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg",
  },
  {
    name: "Deirdre Mullins",
    profile_path:
      "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg",
  },
  {
    name: "Sebastian Stankiewicz",
    profile_path:
      "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg",
  },
  {
    name: "Tue Lunding",
    profile_path:
      "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg",
  },
  {
    name: "Jacek Dzisiewicz",
    profile_path:
      "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg",
  },
  {
    name: "Ian Hanmore",
    profile_path:
      "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg",
  },
  {
    name: "Eveline Hall",
    profile_path:
      "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg",
  },
  {
    name: "Kamila Klamut",
    profile_path:
      "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
  },
  {
    name: "Caoilinn Springall",
    profile_path:
      "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg",
  },
  {
    name: "Jan Kowalewski",
    profile_path:
      "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
  },
  {
    name: "Pawel Wysocki",
    profile_path:
      "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
  },
  {
    name: "Simon Lööf",
    profile_path:
      "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg",
  },
  {
    name: "Tomasz Cymerman",
    profile_path:
      "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
  },
];

export const dummyShowsData = [
  {
    _id: "1000004",
    id: 1000004,
    title: "Inception",
    overview:
      "A skilled thief, the absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state.",
    poster_path:
      "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-07-16",
    original_language: "en",
    tagline: "Your mind is the scene of the crime.",
    vote_average: 8.3,
    vote_count: 24000,
    runtime: 148,
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    _id: "1000005",
    id: 1000005,
    title: "Interstellar",
    overview:
      "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse.",
    poster_path:
      "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    genres: [
      { id: 12, name: "Adventure" },
      { id: 18, name: "Drama" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-11-07",
    original_language: "en",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    vote_average: 8.6,
    vote_count: 21000,
    runtime: 169,
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    _id: "1000006",
    id: 1000006,
    title: "The Martian",
    overview:
      "When astronaut Mark Watney is presumed dead after a fierce storm, he finds himself stranded alone on Mars. With limited supplies, he must draw upon his ingenuity and spirit to survive and signal to Earth that he is alive.",
    poster_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cn6i1-z0X-18P7UKD-admBcUorkh6pxUMkOXyje--nxlWJllwJOsTY8mViygwg0dt56Odg",
    backdrop_path:
      "https://i.imgur.com/kKS7neK.jpg",
    genres: [
      { id: 12, name: "Adventure" },
      { id: 18, name: "Drama" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-10-02",
    original_language: "en",
    tagline: "Bring Him Home.",
    vote_average: 8.0,
    vote_count: 16000,
    runtime: 144,
    trailer: "https://www.youtube.com/watch?v=ej3ioOneTy8",
  },
  {
    _id: "1000001",
    id: 1000001,
    title: "The Dark Knight",
    overview:
      "Batman sets out to dismantle the remaining criminal organizations that plague Gotham. But he soon finds himself prey to a reign of chaos unleashed by a rising criminal mastermind known as the Joker.",
    poster_path:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://i.ebayimg.com/images/g/ISMAAOSw5P5glq8I/s-l400.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" },
    ],
    casts: dummyCastsData,
    release_date: "2025-07-18",
    original_language: "en",
    tagline: "Why So Serious?",
    vote_average: 8.5,
    vote_count: 29000,
    runtime: 152,
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    _id: "1000002",
    id: 1000002,
    title: "Avengers: Endgame",
    overview:
      "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos’ destruction and restore balance to the universe.",
    poster_path:
      "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-26",
    original_language: "en",
    tagline: "Part of the journey is the end.",
    vote_average: 8.4,
    vote_count: 25000,
    runtime: 181,
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    _id: "1000003",
    id: 1000003,
    title: "Titanic",
    overview:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    poster_path:
      "https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    backdrop_path: "https://i.ebayimg.com/images/g/CZIAAMXQaBtQ97mj/s-l400.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" },
    ],
    casts: dummyCastsData,
    release_date: "2025-12-19",
    original_language: "en",
    tagline: "Nothing on Earth could come between them.",
    vote_average: 7.9,
    vote_count: 23000,
    runtime: 195,
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
  },
  {
    _id: "324544",
    id: 324544,
    title: "In the Lost Lands",
    overview:
      "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
    poster_path:
      "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 14, name: "Fantasy" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-02-27",
    original_language: "en",
    tagline: "She seeks the power to free her people.",
    vote_average: 6.4,
    vote_count: 15000,
    runtime: 102,
    trailer: "https://youtu.be/CMyrp5Vk3mU?si=BKTgoa7h05I03YBW",
  },
  {
    _id: "1232546",
    id: 1232546,
    title: "Until Dawn",
    overview:
      "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
    poster_path:
      "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genres: [
      { id: 27, name: "Horror" },
      { id: 9648, name: "Mystery" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "en",
    tagline: "Every night a different nightmare.",
    vote_average: 6.405,
    vote_count: 18000,
    runtime: 103,
    trailer: "https://youtu.be/2b3vBaINZ7w?si=JbIFEuMNuVLgqhPa",
  },
  {
    _id: "552524",
    id: 552524,
    title: "Lilo & Stitch",
    overview:
      "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    poster_path:
      "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Hold on to your coconuts.",
    vote_average: 7.117,
    vote_count: 18000,
    runtime: 108,
    trailer: "https://youtu.be/VWqJifMMgZE?si=f34k-y5jzAwqeQql",
  },
  {
    _id: "668489",
    id: 668489,
    title: "Havoc",
    overview:
      "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
    poster_path:
      "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "en",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
    trailer: "https://youtu.be/6txjTWLoSc8?si=iUFycsmROoNo6MM8",
  },
  {
    _id: "950387",
    id: 950387,
    title: "A Minecraft Movie",
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    poster_path:
      "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
    ],
    casts: dummyCastsData,
    release_date: "2025-03-31",
    original_language: "en",
    tagline: "Be there and be square.",
    vote_average: 6.516,
    vote_count: 15225,
    runtime: 101,
    trailer: "https://youtu.be/8B1EtVPBSMw?si=jGYhJvRle7s2_2SL",
  },
  {
    _id: "575265",
    id: 575265,
    title: "Mission: Impossible - The Final Reckoning",
    overview:
      "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Our lives are the sum of our choices.",
    vote_average: 7.042,
    vote_count: 19885,
    runtime: 170,
    trailer: "https://youtu.be/fsQgc9pCyDU?si=61m_nXUDj-DVv0nj",
  },
  {
    _id: "986056",
    id: 986056,
    title: "Thunderbolts*",
    overview:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    poster_path:
      "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-30",
    original_language: "en",
    tagline: "Everyone deserves a second shot.",
    vote_average: 7.443,
    vote_count: 23569,
    runtime: 127,
    trailer: "https://youtu.be/-sAOWhvheK8?si=9l-NJS8Fz5trdA8y",
  },
];

export const dummyDateTimeData = {
  "2025-07-24": [
    { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" },
  ],
  "2025-07-25": [
    { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
    { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
  ],
  "2025-07-26": [
    { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" },
  ],
  "2025-07-27": [
    { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
    { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" },
  ],
};

export const dummyDashboardData = {
  totalBookings: 14,
  totalRevenue: 1517,
  totalUser: 5,
  activeShows: [
    {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
      __v: 0,
    },
    {
      _id: "68380044686d454f2116b39a",
      movie: dummyShowsData[5],
      showDateTime: "2025-06-20T16:00:00.000Z",
      showPrice: 79,
      occupiedSeats: {
        A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "MananRoy" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 98,
    bookedSeats: ["D1", "D2"],
    isPaid: false,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "MananRoy" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 49,
    bookedSeats: ["A1"],
    isPaid: true,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "MananRoy" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 147,
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: true,
  },
];
