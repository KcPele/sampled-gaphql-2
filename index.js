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
