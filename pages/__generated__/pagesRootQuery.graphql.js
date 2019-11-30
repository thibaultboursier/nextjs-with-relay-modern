/**
 * @flow
 * @relayHash 7c26038b836a80433ac6084ad072f248
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemsContainer_items$ref = any;
export type pagesRootQueryVariables = {||};
export type pagesRootQueryResponse = {|
  +agencies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ItemsContainer_items$ref
  |}>
|};
export type pagesRootQuery = {|
  variables: pagesRootQueryVariables,
  response: pagesRootQueryResponse,
|};
*/


/*
query pagesRootQuery {
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
    "name": "pagesRootQuery",
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
    "name": "pagesRootQuery",
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
    "name": "pagesRootQuery",
    "id": null,
    "text": "query pagesRootQuery {\n  agencies {\n    ...ItemsContainer_items\n    id\n  }\n}\n\nfragment ItemContainer_item on Agency {\n  id\n  gtfsId\n  name\n}\n\nfragment ItemsContainer_items on Agency {\n  id\n  ...ItemContainer_item\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '54659a566c40b4a1e5f1b49b43316f28';
module.exports = node;
