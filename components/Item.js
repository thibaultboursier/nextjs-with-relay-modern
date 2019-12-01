import React, { useCallback, useState, useContext } from "react";
import { ListGroupItem } from "reactstrap";
import ItemQuery, { ItemQueryRenderer } from "../queries/itemQuery";

const Item = ({ item, isSelected, onClick }) => (
  <ListGroupItem
    action
    active={isSelected}
    href="#"
    onClick={event => {
      event.preventDefault();
      onClick(item.id);
    }}
    tag="a"
  >
    {item.name}
    {isSelected && (
      <ItemQueryRenderer gtfsId={item.gtfsId}>
        {({ error, props }) => {
          if (error) {
            return <div>An error occured: "{error.message}"</div>;
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          return (
            <div>&nbsp;&nbsp;&nbsp;# Timezone: {props.agency.timezone}</div>
          );
        }}
      </ItemQueryRenderer>
    )}
  </ListGroupItem>
);

export default Item;
