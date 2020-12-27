import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { addBookMutation, getAuthorsQuery } from '../graphql/queries';
import { ADD_BOOK } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

function AddBook(props) {
  const [addBook, { bookData }] = useMutation(ADD_BOOK);

  const [newBook, setNewBook] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  // useQuery Hook returns an object from Apollo Client that contains loading , error
  // , and data properties you can use to render your UI.
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const { authors } = data || [];

  if (error) return <p>Error! ${error.message}</p>;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: { name: newBook.name, genre: newBook.genre, authorId: newBook.authorId },
    });

    console.log('New Book Added', newBook);
  };

  return (
    <form onSubmit={handleSubmitForm} id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select
          value={newBook.authorId}
          onChange={(e) => setNewBook({ ...newBook, authorId: e.target.value })}
        >
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

      <button type='submit'>+</button>
    </form>
  );
}

export default AddBook;
