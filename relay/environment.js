import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetch from "isomorphic-unfetch";

let environment = null;

function fetchQuery(operation, variables) {
  return fetch("https://api.graphql.jobs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

export const initEnvironment = ({ records = {} } = {}) => {
  // Create a network layer from the fetch function
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource(records));

  // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return new Environment({
      network,
      store
    });
  }

  // reuse Relay environment on client-side
  if (!environment) {
    environment = new Environment({
      network,
      store
    });
  }

  return environment;
};
