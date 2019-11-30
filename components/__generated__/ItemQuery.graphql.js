/**
 * @flow
 * @relayHash c2144f3869d63a7c0c24eae6782f58ec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ItemQueryVariables = {|
  id: string
|};
export type ItemQueryResponse = {|
  +agency: ?{|
    +id: string,
    +phone: ?string,
    +timezone: string,
    +url: string,
  |}
|};
export type ItemQuery = {|
  variables: ItemQueryVariables,
  response: ItemQueryResponse,
|};
*/


/*
query ItemQuery(
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
    "name": "ItemQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ItemQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ItemQuery",
    "id": null,
    "text": "query ItemQuery(\n  $id: String!\n) {\n  agency(id: $id) {\n    id\n    phone\n    timezone\n    url\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ccc17e3884637cac6720303f95add8eb';
module.exports = node;
