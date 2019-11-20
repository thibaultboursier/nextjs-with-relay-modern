import React from "react";
import { QueryRenderer } from "react-relay";
import { getEnvironment } from "../relay/environment";
import { LocationWithFragment } from "./Location";

export const JobList = ({ locations }) => (
  <ul>
    {locations &&
      locations.map((location, index) => (
        <LocationWithFragment key={location.id || index} location={location} />
      ))}
  </ul>
);
