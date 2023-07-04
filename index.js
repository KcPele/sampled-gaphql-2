import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { games, reviews, authors } from "./_db.js";

const resolvers = {
  Query: {
    games: () => {
      return [...games];
    },
    reviews: () => {
      return [...reviews];
    },
    authors: () => {
      return [...authors];
    },
  },
};
const server = new ApolloServer({
  //typeDefs
  typeDefs,
  //resolvers
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready a port 4000");
