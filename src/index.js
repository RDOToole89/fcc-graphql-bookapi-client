import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { gql } from '@apollo/client';

// apollo client setup
// we setup the client as defined in the backend this is what the ApolloProvider connects to
// we then are able to query and inject our data into the app by wrapping the app in the Provider

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// QUERY JAVASCRIPT FOR TESTING

// client
//   .query({
//     query: gql`
//       query GetAuthors {
//         authors {
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
