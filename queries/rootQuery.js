import graphql from "babel-plugin-relay/macro";

export const rootQuery = graphql`
  query rootQueryQuery {
    agencies {
      ...ItemsContainer_items
    }
  }
`;
