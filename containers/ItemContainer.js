import { createFragmentContainer, ReactRelayContext } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Item from "../components/Item";

export default createFragmentContainer(Item, {
  item: graphql`
    fragment ItemContainer_item on Agency {
      id
      gtfsId
      name
    }
  `
});
