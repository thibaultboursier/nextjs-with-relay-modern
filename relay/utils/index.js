import { getRequest, createOperationDescriptor } from "relay-runtime";

export const getOperationFromQuery = (query, variables) => {
  const request = getRequest(query);

  return createOperationDescriptor(request, variables).root;
};

export const getQueryRecordsFromEnvironment = environment =>
  environment
    .getStore()
    .getSource()
    .toJSON();
