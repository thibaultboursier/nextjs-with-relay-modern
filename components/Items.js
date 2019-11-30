import React, { useCallback, useState } from "react";
import ItemContainer from "../containers/ItemContainer";

const Items = ({ items }) => {
  const [activeItem, setActiveItem] = useState();
  const onClick = useCallback(id => setActiveItem(id), []);

  return (
    <div className="list-group">
      {items &&
        items.map((item, index) => (
          <ItemContainer
            isSelected={item.id === activeItem}
            item={item}
            key={item.id || index}
            onClick={onClick}
          />
        ))}
    </div>
  );
};

export default Items;
