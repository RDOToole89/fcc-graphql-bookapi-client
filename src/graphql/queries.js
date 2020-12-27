import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query AllBooks {
    books {
      name
      id
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
