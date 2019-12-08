import graphql from "babel-plugin-relay/macro";

export const rootQuery = graphql`
  query rootQuery {
    agencies {
      ...ItemList_items
    }
  }
`;
