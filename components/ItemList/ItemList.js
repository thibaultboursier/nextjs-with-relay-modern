import React, { useCallback, useState } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Badge, ListGroup } from "reactstrap";
import Item from "../Item/Item";

export const ItemList = ({ items }) => {
  const [activeItem, setActiveItem] = useState();
  const onClick = useCallback(id => setActiveItem(id), []);

  return (
    <>
      <h3 className="mb-4">
        List of items <Badge>{items.length}</Badge>
      </h3>
      <ListGroup>
        {items &&
          items.map((item, index) => (
            <Item
              isSelected={item.id === activeItem}
              item={item}
              key={item.id || index}
              onClick={onClick}
            />
          ))}
      </ListGroup>
    </>
  );
};

export default createFragmentContainer(ItemList, {
  items: graphql`
    fragment ItemList_items on Agency @relay(plural: true) {
      id
      ...Item_item
    }
  `
});
