import React, { useContext } from "react";
import { QueryRenderer, ReactRelayContext } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export const itemQuery = graphql`
  query itemQueryQuery($id: String!) {
    agency(id: $id) {
      id
      phone
      timezone
      url
    }
  }
`;

export const ItemQueryRenderer = ({ children, gtfsId: id }) => {
  const { environment } = useContext(ReactRelayContext);

  return (
    <QueryRenderer
      environment={environment}
      query={itemQuery}
      render={children}
      variables={{
        id
      }}
    />
  );
};
