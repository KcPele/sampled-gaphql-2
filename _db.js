let games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    plateform: ["Nintendo Switch", "Wii U"],
  },
  {
    id: 2,
    title: "Super Mario Odyssey",
    plateform: ["Nintendo Switch"],
  },
  {
    id: 3,
    title: "Super Mario 64",
    plateform: ["Nintendo 64"],
  },
  {
    id: 4,

    title: "The Legend of Zelda: Ocarina of Time",
    plateform: ["Nintendo 64"],
  },
];

let reviews = [
  {
    id: 1,
    rating: 5,
    content: "This game is amazing!",
    game_id: 1,
    author_id: 1,
  },
  {
    id: 2,
    rating: 4,
    content: "This game is pretty good!",
    game_id: 2,
    author_id: 2,
  },
  {
    id: 3,
    rating: 3,
    content: "This game is ok!",
    game_id: 3,
    author_id: 1,
  },
  {
    id: 4,
    rating: 2,
    content: "This game is not so good!",
    game_id: 4,
    author_id: 4,
  },
  {
    id: 5,
    rating: 1,
    content: "This game is terrible!",
    game_id: 1,
    author_id: 2,
  },
  {
    id: 6,
    rating: 5,
    content: "This game is amazing!",
    game_id: 2,
    author_id: 4,
  },
  {
    id: 7,
    rating: 4,
    content: "This game is pretty good!",
    game_id: 3,
    author_id: 2,
  },
];

let authors = [
  {
    id: 1,
    name: "John Doe",
    verified: true,
  },
  {
    id: 2,

    name: "Jane Doe",

    verified: false,
  },
  {
    id: 3,
    name: "John Smith",
    verified: true,
  },
  {
    id: 4,
    name: "Jane Smith",
    verified: false,
  },
];

export { games, reviews, authors };
