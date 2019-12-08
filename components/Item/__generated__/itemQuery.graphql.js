/**
 * @flow
 * @relayHash 2c631f6424db599240dd0bd0dc09824c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type itemQueryVariables = {|
  id: string
|};
export type itemQueryResponse = {|
  +agency: ?{|
    +id: string,
    +phone: ?string,
    +timezone: string,
    +url: string,
  |}
|};
export type itemQuery = {|
  variables: itemQueryVariables,
  response: itemQueryResponse,
|};
*/


/*
query itemQuery(
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
    "name": "itemQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "itemQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "itemQuery",
    "id": null,
    "text": "query itemQuery(\n  $id: String!\n) {\n  agency(id: $id) {\n    id\n    phone\n    timezone\n    url\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '72f19b3f171ac25b33e4a86e218a7261';
module.exports = node;
