/**
 * @flow
 * @relayHash 6adea4430bdd2bda190d28e44745d119
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemsContainer_items$ref = any;
export type rootQueryQueryVariables = {||};
export type rootQueryQueryResponse = {|
  +agencies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ItemsContainer_items$ref
  |}>
|};
export type rootQueryQuery = {|
  variables: rootQueryQueryVariables,
  response: rootQueryQueryResponse,
|};
*/


/*
query rootQueryQuery {
  agencies {
    ...ItemsContainer_items
    id
  }
}

fragment ItemContainer_item on Agency {
  id
  gtfsId
  name
}

fragment ItemsContainer_items on Agency {
  id
  ...ItemContainer_item
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "rootQueryQuery",
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
            "name": "ItemsContainer_items",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "rootQueryQuery",
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
    "name": "rootQueryQuery",
    "id": null,
    "text": "query rootQueryQuery {\n  agencies {\n    ...ItemsContainer_items\n    id\n  }\n}\n\nfragment ItemContainer_item on Agency {\n  id\n  gtfsId\n  name\n}\n\nfragment ItemsContainer_items on Agency {\n  id\n  ...ItemContainer_item\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '2a612f6201ee1afecab7bd65be9602a5';
module.exports = node;
