/**
 * @flow
 * @relayHash 02635745eefd93806925dc0bf68f8540
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Location_location$ref = any;
export type LocationsInput = {|
  value: string
|};
export type JobsLocationsQueryVariables = {|
  input: LocationsInput
|};
export type JobsLocationsQueryResponse = {|
  +locations: $ReadOnlyArray<{|
    +$fragmentRefs: Location_location$ref
  |}>
|};
export type JobsLocationsQuery = {|
  variables: JobsLocationsQueryVariables,
  response: JobsLocationsQueryResponse,
|};
*/


/*
query JobsLocationsQuery(
  $input: LocationsInput!
) {
  locations(input: $input) {
    ...Location_location
    id
  }
}

fragment Location_location on Location {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LocationsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "JobsLocationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Location_location",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "JobsLocationsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "JobsLocationsQuery",
    "id": null,
    "text": "query JobsLocationsQuery(\n  $input: LocationsInput!\n) {\n  locations(input: $input) {\n    ...Location_location\n    id\n  }\n}\n\nfragment Location_location on Location {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '687d2808b98bf50e700035c528db5442';
module.exports = node;
