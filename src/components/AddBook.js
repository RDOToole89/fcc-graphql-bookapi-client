import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../graphql/queries';

function AddBook(props) {
  // useQuery Hook returns an object from Apollo Client that contains loading , error
  // , and data properties you can use to render your UI.
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const { authors } = data || [];

  if (error) {
    return <p>Error! ${error.message}</p>;
  }

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
          {loading ? (
            <option disabled>Loading authors...</option>
          ) : (
            authors.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))
          )}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
