import React, { useContext } from "react";
import { QueryRenderer, ReactRelayContext } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const query = graphql`
  query ItemQuery($id: String!) {
    agency(id: $id) {
      id
      phone
      timezone
      url
    }
  }
`;

const ItemQuery = ({ children, gtfsId: id }) => {
  const { environment } = useContext(ReactRelayContext);

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={children}
      variables={{
        id
      }}
    />
  );
};

export default ItemQuery;
