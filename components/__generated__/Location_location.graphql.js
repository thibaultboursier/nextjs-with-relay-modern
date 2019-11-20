/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Location_location$ref: FragmentReference;
declare export opaque type Location_location$fragmentType: Location_location$ref;
export type Location_location = {|
  +id: string,
  +name: string,
  +$refType: Location_location$ref,
|};
export type Location_location$data = Location_location;
export type Location_location$key = {
  +$data?: Location_location$data,
  +$fragmentRefs: Location_location$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Location_location",
  "type": "Location",
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
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8171856e7f634f6845a8ab04c055e5bc';
module.exports = node;
