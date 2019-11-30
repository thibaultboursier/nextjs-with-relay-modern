import React, { useCallback, useState, useContext } from "react";
import ItemQuery from "../queries/ItemQuery";

const Item = ({ item, isSelected, onClick }) => (
  <li onClick={() => onClick(item.id)}>
    {item.name}
    {isSelected && (
      <ItemQuery gtfsId={item.gtfsId}>
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
      </ItemQuery>
    )}
  </li>
);

export default Item;
