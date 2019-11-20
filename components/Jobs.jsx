import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../relay.env";

const graphql = require("babel-plugin-relay/macro");

export const Jobs = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query JobsLocationsQuery($input: LocationsInput!) {
        locations(input: $input) {
          id
          slug
          name
          type
        }
      }
    `}
    variables={{
      input: {
        value: "N"
      }
    }}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }

      if (!props) {
        return <div>Loading...</div>;
      }

      return (
        <>
          <h3>Jobs locations</h3>
          <ul>
            {props.locations.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </>
      );
    }}
  />
);
