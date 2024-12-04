const { createServer } = require('@graphql-yoga/node');

// Define el esquema
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

// Datos simulados 
const users = [
  { id: "1", name: "Juan", age: 25 },
  { id: "2", name: "Ana", age: 30 },
];

// Define los resolvers
const resolvers = {
  Query: {
    hello: () => "¡Hola, mundo!",
    user: (_, { id }) => users.find(user => user.id === id),
  },
};

// Crear el servidor GraphQL
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

// Inicia el servidor
server.start(() => {
  console.log("Servidor GraphQL ejecutándose en http://localhost:4000");
});
