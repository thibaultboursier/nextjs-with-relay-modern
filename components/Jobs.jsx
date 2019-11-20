import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../relay.env";
import { LocationWithFragment } from "./Location";

const graphql = require("babel-plugin-relay/macro");

export const Jobs = ({ locations }) => (
  <>
    <h3>Jobs locations</h3>
    <ul>
      {locations &&
        locations.map((location, index) => (
          <LocationWithFragment
            key={location.id || index}
            location={location}
          />
        ))}
    </ul>
  </>
);

export const JobsWithQueryRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query JobsLocationsQuery($input: LocationsInput!) {
        locations(input: $input) {
          ...Location_location
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

      return <Jobs locations={props.locations} />;
    }}
  />
);
