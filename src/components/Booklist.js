import React from 'react';
// gql is an interpreter of GraphQL queries
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function Booklist(props) {
  console.log('BOOKLIST PROPS', props);
  const { books } = props.data;
  const { loading } = props.data;

  return (
    <div>
      <ul id='book-list'>
        {loading ? <div>Loading books...</div> : books.map((x) => <li key={x.id}>{x.name}</li>)}
      </ul>
    </div>
  );
}

// using the graphql function to wrap the getBooksQuery to the booklist components
// allowing you to find the getBooksQuery in the props
// oldskool react component method => see addBook
export default graphql(getBooksQuery)(Booklist);
