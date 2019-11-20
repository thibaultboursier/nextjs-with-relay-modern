/**
 * @flow
 * @relayHash c2ed0414c482be5a77e8911fc8f95499
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LocationsInput = {|
  value: string
|};
export type JobsLocationsQueryVariables = {|
  input: LocationsInput
|};
export type JobsLocationsQueryResponse = {|
  +locations: $ReadOnlyArray<{|
    +id: string,
    +slug: string,
    +name: string,
    +type: string,
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
    id
    slug
    name
    type
  }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "locations",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
        "name": "slug",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }
    ]
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
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "JobsLocationsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "JobsLocationsQuery",
    "id": null,
    "text": "query JobsLocationsQuery(\n  $input: LocationsInput!\n) {\n  locations(input: $input) {\n    id\n    slug\n    name\n    type\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '41a28232381756ad54602f7173025101';
module.exports = node;
