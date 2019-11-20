import React from "react";
import { QueryRenderer } from "react-relay";
import { getEnvironment } from "../relay/environment";
import { LocationWithFragment } from "./Location";
import { useRelayContext } from "../relay/Provider";

const graphql = require("babel-plugin-relay/macro");

export const JobList = ({ locations }) => (
  <ul>
    {locations &&
      locations.map((location, index) => (
        <LocationWithFragment key={location.id || index} location={location} />
      ))}
  </ul>
);

// export const JobListWithQueryRenderer = () => {
//   const { environment } = useRelayContext();

//   return (
//     <QueryRenderer
//       environment={environment}
//       query={graphql`
//         query JobListLocationsQuery($input: LocationsInput!) {
//           locations(input: $input) {
//             ...Location_location
//           }
//         }
//       `}
//       variables={{
//         input: {
//           value: "N"
//         }
//       }}
//       render={({ error, props }) => {
//         if (error) {
//           return <div>Error!</div>;
//         }

//         if (!props) {
//           return <div>Loading...</div>;
//         }

//         return <JobList locations={props.locations} />;
//       }}
//     />
//   );
// };
