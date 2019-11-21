import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!!!');
});

const root = {
  friend: () => {
    return {
      id: 2346985547409,
      firstName: 'Niki',
      lastName: 'Jiandani',
      gender: 'does it matter?',
      language: 'Anglais',
      emails: [{ email: 'me@me.com' }, { email: 'another@me.com' }]
    };
  }
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(8080, () =>
  console.log('Running server on port localhost:8080/graphql')
);
