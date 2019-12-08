/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Item_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemList_items$ref: FragmentReference;
declare export opaque type ItemList_items$fragmentType: ItemList_items$ref;
export type ItemList_items = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Item_item$ref,
  +$refType: ItemList_items$ref,
|}>;
export type ItemList_items$data = ItemList_items;
export type ItemList_items$key = $ReadOnlyArray<{
  +$data?: ItemList_items$data,
  +$fragmentRefs: ItemList_items$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItemList_items",
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
(node/*: any*/).hash = '2811b9a2f8f04a38bd4e82eabce64913';
module.exports = node;
