/**
 * @flow
 * @relayHash 1edd8761c2f092c03e9a144a0f556735
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Location_location$ref = any;
export type LocationsInput = {|
  value: string
|};
export type JobListLocationsQueryVariables = {|
  input: LocationsInput
|};
export type JobListLocationsQueryResponse = {|
  +locations: $ReadOnlyArray<{|
    +$fragmentRefs: Location_location$ref
  |}>
|};
export type JobListLocationsQuery = {|
  variables: JobListLocationsQueryVariables,
  response: JobListLocationsQueryResponse,
|};
*/


/*
query JobListLocationsQuery(
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
    "name": "JobListLocationsQuery",
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
    "name": "JobListLocationsQuery",
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
    "name": "JobListLocationsQuery",
    "id": null,
    "text": "query JobListLocationsQuery(\n  $input: LocationsInput!\n) {\n  locations(input: $input) {\n    ...Location_location\n    id\n  }\n}\n\nfragment Location_location on Location {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b661ed256b00d60b546ca6a009437d18';
module.exports = node;
