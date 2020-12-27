import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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

  if (loading) return 'Loading...';
  if (error) {
    return <p>Error! ${error.message}</p>;
  }

  const { authors } = data;

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
          {authors.map((x) => (
            <option key={x.id}>{x.name}</option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
