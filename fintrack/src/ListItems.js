import React from "react";
import LineItems from "./LineItems";

const ListItems = ({ items, handelChange, handelDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItems
          item={item}
          key={item.id}
          handelChange={handelChange}
          handelDelete={handelDelete}
        ></LineItems>
      ))}
    </ul>
  );
};

export default ListItems;
