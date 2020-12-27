import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query AllBooks {
    books {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query SingleBook($id: String!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query AllAuthors {
    authors {
      name
      id
    }
  }
`;
