/**
 * @flow
 * @relayHash 578efe0019d80884adc4b8638262582c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemList_items$ref = any;
export type rootQueryVariables = {||};
export type rootQueryResponse = {|
  +agencies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ItemList_items$ref
  |}>
|};
export type rootQuery = {|
  variables: rootQueryVariables,
  response: rootQueryResponse,
|};
*/


/*
query rootQuery {
  agencies {
    ...ItemList_items
    id
  }
}

fragment ItemList_items on Agency {
  id
  ...Item_item
}

fragment Item_item on Agency {
  id
  gtfsId
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "rootQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agencies",
        "storageKey": null,
        "args": null,
        "concreteType": "Agency",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ItemList_items",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "rootQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agencies",
        "storageKey": null,
        "args": null,
        "concreteType": "Agency",
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
            "name": "gtfsId",
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
    "name": "rootQuery",
    "id": null,
    "text": "query rootQuery {\n  agencies {\n    ...ItemList_items\n    id\n  }\n}\n\nfragment ItemList_items on Agency {\n  id\n  ...Item_item\n}\n\nfragment Item_item on Agency {\n  id\n  gtfsId\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'bf4e9854c02f685db6ba783f4a162c1e';
module.exports = node;
