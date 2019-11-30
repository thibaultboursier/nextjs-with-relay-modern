import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Items from "../components/Items";

export default createFragmentContainer(Items, {
  items: graphql`
    fragment ItemsContainer_items on Agency @relay(plural: true) {
      id
      ...ItemContainer_item
    }
  `
});
