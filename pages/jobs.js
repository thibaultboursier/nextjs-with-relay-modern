import {
  JobsWithQueryRenderer,
  JobList,
  JobListWithQueryRenderer
} from "../components/JobList";
import { withData } from "../relay/withData";

const graphql = require("babel-plugin-relay/macro");

const Jobs = ({ locations }) => (
  <>
    <h1>Job locations</h1>
    <JobList locations={locations} />
  </>
);

export default withData(Jobs, {
  query: graphql`
    query jobsLocationsQuery($input: LocationsInput!) {
      locations(input: $input) {
        ...Location_location
      }
    }
  `,
  variables: {
    input: {
      value: "N"
    }
  }
});
