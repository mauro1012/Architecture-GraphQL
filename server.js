import { createServer } from 'http';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type Query {
    hello: String
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }
`;

const users = [
  { id: "1", name: "Juan", age: 26 },
  { id: "2", name: "Ana", age: 30 },
  { id: "3", name: "Mauro", age: 22}
];

const resolvers = {
  Query: {
    hello: () => "¡Hola, mundo!",
    user: (_, { id }) => users.find((user) => user.id === id),
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('Servidor GraphQL ejecutándose en http://localhost:4000');
});
