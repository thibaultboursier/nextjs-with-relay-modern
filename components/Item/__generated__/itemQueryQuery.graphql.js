/**
 * @flow
 * @relayHash 9a4d3a2be9fd165d62e2576c08c19766
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type itemQueryQueryVariables = {|
  id: string
|};
export type itemQueryQueryResponse = {|
  +agency: ?{|
    +id: string,
    +phone: ?string,
    +timezone: string,
    +url: string,
  |}
|};
export type itemQueryQuery = {|
  variables: itemQueryQueryVariables,
  response: itemQueryQueryResponse,
|};
*/


/*
query itemQueryQuery(
  $id: String!
) {
  agency(id: $id) {
    id
    phone
    timezone
    url
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "agency",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Agency",
    "plural": false,
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
        "name": "phone",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "timezone",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
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
    "name": "itemQueryQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "itemQueryQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "itemQueryQuery",
    "id": null,
    "text": "query itemQueryQuery(\n  $id: String!\n) {\n  agency(id: $id) {\n    id\n    phone\n    timezone\n    url\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '11ab6e96e49bb62240b798f54684a1e0';
module.exports = node;
