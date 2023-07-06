export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    plateform: [String!]!
    reviews: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}

type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review

    authors: [Author]
    author(id: ID!): Author
}
type Mutation {
    addGame(game: AddGameInput): Game
    updateGame(id: ID!, edit: EditGameInput): Game
    deleteGame(id: ID!): [Game]
}

input AddGameInput {

    title: String!, 
    
    plateform: [String!]!
}
input EditGameInput {
    title: String
    plateform: [String!]
}
`;
