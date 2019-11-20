import React from "react";
import { createFragmentContainer } from "react-relay";

const graphql = require("babel-plugin-relay/macro");

const Location = ({ location }) => {
  if (!location) {
    return null;
  }

  return <li key={location.id}>{location.name}</li>;
};

export const LocationWithFragment = createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      id
      name
    }
  `
});
