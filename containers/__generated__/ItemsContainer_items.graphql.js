/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemContainer_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemsContainer_items$ref: FragmentReference;
declare export opaque type ItemsContainer_items$fragmentType: ItemsContainer_items$ref;
export type ItemsContainer_items = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: ItemContainer_item$ref,
  +$refType: ItemsContainer_items$ref,
|}>;
export type ItemsContainer_items$data = ItemsContainer_items;
export type ItemsContainer_items$key = $ReadOnlyArray<{
  +$data?: ItemsContainer_items$data,
  +$fragmentRefs: ItemsContainer_items$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItemsContainer_items",
  "type": "Agency",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ItemContainer_item",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fc15850835b03f5610122433fb2d46cc';
module.exports = node;
