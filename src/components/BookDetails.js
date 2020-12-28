import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOK } from '../graphql/queries';

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  if (loading) return null;
  if (error) console.log(`Error! ${error}`);

  const displayBookDetails = () => {
    if (data) {
      const { book } = data;
      if (book) {
        return (
          <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <ul className='other-books'>
              {book.author.books.map((x) => {
                return <li key={x.id}>{x.name}</li>;
              })}
            </ul>
          </div>
        );
      } else {
        return <div>No book selected...</div>;
      }
    }
  };

  return <div id='book-details'>{displayBookDetails()}</div>;
}

export default BookDetails;
