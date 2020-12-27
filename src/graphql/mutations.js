import { gql } from 'apollo-boost';

export const ADD_BOOK = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;
