import Booklist from './components/Booklist';
import ApolloClient from 'apollo-boost';
// ApolloProvider interprets incoming GQL Data
// We wrap the entire app in the provider
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';

// apollo client setup
// we setup the client as defined in the backend this is what the ApolloProvider connects to
// we then are able to query and inject our data into the app by wrapping the app in the Provider
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Roibin's Reading List</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
