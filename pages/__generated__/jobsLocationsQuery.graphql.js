/**
 * @flow
 * @relayHash eb2816a0a3f37fc0dadcf5abfd4ab864
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Location_location$ref = any;
export type LocationsInput = {|
  value: string
|};
export type jobsLocationsQueryVariables = {|
  input: LocationsInput
|};
export type jobsLocationsQueryResponse = {|
  +locations: $ReadOnlyArray<{|
    +$fragmentRefs: Location_location$ref
  |}>
|};
export type jobsLocationsQuery = {|
  variables: jobsLocationsQueryVariables,
  response: jobsLocationsQueryResponse,
|};
*/


/*
query jobsLocationsQuery(
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
    "name": "jobsLocationsQuery",
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
    "name": "jobsLocationsQuery",
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
    "name": "jobsLocationsQuery",
    "id": null,
    "text": "query jobsLocationsQuery(\n  $input: LocationsInput!\n) {\n  locations(input: $input) {\n    ...Location_location\n    id\n  }\n}\n\nfragment Location_location on Location {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4385c648d7271821e4655197a52b5432';
module.exports = node;
