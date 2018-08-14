const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    getBooks: [Book]
    getAuthors: [Author]
  }

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type TypeName {
    fieldA: String
    fieldB: Boolean
    fieldC: Int
    fieldD: CustomType
  // }

  type CustomType {
    circular: TypeName
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
