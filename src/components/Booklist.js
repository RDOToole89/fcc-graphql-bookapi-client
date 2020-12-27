import React, { useState } from 'react';
import { GET_BOOKS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import BookDetails from './BookDetails';

function Booklist() {
  const [bookId, setBookId] = useState('');
  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log(bookId);

  if (error) {
    return <p>Error! ${error.message}</p>;
  }

  const { books } = data || [];

  return (
    <div>
      <ul id='book-list'>
        {loading ? (
          <div>Loading books...</div>
        ) : (
          books.map((x) => (
            <li onClick={(e) => setBookId(x.id)} key={x.id}>
              {x.name}
            </li>
          ))
        )}
      </ul>
      <BookDetails />
    </div>
  );
}

export default Booklist;
