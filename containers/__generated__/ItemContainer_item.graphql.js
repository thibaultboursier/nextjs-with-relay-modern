/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemContainer_item$ref: FragmentReference;
declare export opaque type ItemContainer_item$fragmentType: ItemContainer_item$ref;
export type ItemContainer_item = {|
  +id: string,
  +gtfsId: string,
  +name: string,
  +$refType: ItemContainer_item$ref,
|};
export type ItemContainer_item$data = ItemContainer_item;
export type ItemContainer_item$key = {
  +$data?: ItemContainer_item$data,
  +$fragmentRefs: ItemContainer_item$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItemContainer_item",
  "type": "Agency",
  "metadata": null,
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
};
// prettier-ignore
(node/*: any*/).hash = 'cf45fd2eea70b5bf69b240d666aaebad';
module.exports = node;
