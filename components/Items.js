import React, { useCallback, useState } from "react";
import { Badge, ListGroup } from "reactstrap";
import ItemContainer from "../containers/ItemContainer";

const Items = ({ items }) => {
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
            <ItemContainer
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

export default Items;
