import React from 'react';
import { GET_BOOKS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

function Booklist() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) {
    return <p>Error! ${error.message}</p>;
  }

  const { books } = data || [];

  return (
    <div>
      <ul id='book-list'>
        {loading ? <div>Loading books...</div> : books.map((x) => <li key={x.id}>{x.name}</li>)}
      </ul>
    </div>
  );
}

export default Booklist;
