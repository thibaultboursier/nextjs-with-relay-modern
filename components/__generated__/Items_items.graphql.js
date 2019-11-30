/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Item_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Items_items$ref: FragmentReference;
declare export opaque type Items_items$fragmentType: Items_items$ref;
export type Items_items = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Item_item$ref,
  +$refType: Items_items$ref,
|}>;
export type Items_items$data = Items_items;
export type Items_items$key = $ReadOnlyArray<{
  +$data?: Items_items$data,
  +$fragmentRefs: Items_items$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Items_items",
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
      "name": "Item_item",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b745e2ec95f7ba08c5be53acd32a8fed';
module.exports = node;
