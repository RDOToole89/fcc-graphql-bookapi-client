// import { gql } from 'apollo-boost';
import { gql } from '@apollo/client';

export const getBooksQuery = gql`
  query AllBooks {
    books {
      name
      id
    }
  }
`;

export const getAuthorsQuery = gql`
  query AllAuthors {
    authors {
      name
      id
    }
  }
`;

// with apollo-boost
// const getBooksQuery = gql`
//   {
//     books {
//       name
//       id
//     }
//   }
// `;
