const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./models')

// A map of functions which return data for the schema. Los Resolvers funcionan como los handlers
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs');
const contextMiddleware = require('./util/contextMiddleware')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextMiddleware,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

  sequelize.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(err => console.log(err)) 
});