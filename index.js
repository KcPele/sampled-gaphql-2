import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { games, reviews, authors } from "./_db.js";

const resolvers = {
  Query: {
    games: () => {
      return [...games];
    },
    game: (_, args) => {
      const { id } = args;
      return games.find((game) => game.id == id);
    },
    reviews: () => {
      return [...reviews];
    },
    review: (_, args) => {
      const { id } = args;
      return reviews.find((review) => review.id == id);
    },
    authors: () => {
      return [...authors];
    },
    author: (_, args) => {
      const { id } = args;
      return authors.find((author) => author.id == id);
    },
  },
  Game: {
    reviews: (parent) => {
      const { id } = parent;
      return reviews.filter((review) => review.game_id == id);
    },
  },
  Author: {
    reviews: (parent, args) => {
      const { id } = parent;
      return reviews.filter((review) => review.author_id == id);
    },
  },
  Review: {
    game: (parent) => {
      const { game_id } = parent;
      return games.find((game) => game.id == game_id);
    },
    author: (parent) => {
      const { author_id } = parent;
      return authors.find((author) => author.id == author_id);
    },
  },
  Mutation: {
    addGame: (_, args) => {
      const { game } = args;
      const newGame = {
        id: Math.floor(Math.random() * 1000).toString(),
        ...game,
      };
      games.push(newGame);
      return newGame;
    },
    updateGame: (_, args) => {
      const { id, edit } = args;
      console.log(id, edit);
      games.map((game) => (game.id === id ? { ...game, ...edit } : game));
      console.log(games);
      return games.find((game) => game.id == id);
    },
    deleteGame: (_, args) => {
      const { id } = args;
      const index = games.findIndex((game) => game.id == id);
      games.splice(index, 1);
      return [...games];
    },
  },
};
const server = new ApolloServer({
  //typeDefs
  typeDefs,
  //resolvers
  resolvers,
  cors: {
    origin: ["http://localhost:4000"],
    credentials: true, // true if you need cookies/authentication
    methods: ["GET", "POST", "OPTIONS"],
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready a port 4000");
