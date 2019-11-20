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
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource(records));

  if (!process.browser) {
    return new Environment({
      network,
      store
    });
  }

  if (!environment) {
    environment = new Environment({
      network,
      store
    });
  }

  return environment;
};
