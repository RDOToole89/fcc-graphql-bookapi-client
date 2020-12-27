import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOK } from '../graphql/queries';

function BookDetails() {
  const { loading, error, data } = useQuery(GET_BOOK);

  return (
    <div id='book-details'>
      <p>Output book details here</p>
    </div>
  );
}

export default BookDetails;
