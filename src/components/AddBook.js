import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook(props) {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  console.log('AUTHOR DATA', data);

  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select>
          <option>Select Author</option>
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
