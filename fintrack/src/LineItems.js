import React from "react";
import { IoMdTrash } from "react-icons/io";

const LineItems = ({item, handelChange, handelDelete}) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handelChange(item.id)}
        checked={item.checked}
      />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <IoMdTrash onClick={() => handelDelete(item.id)} />
    </li>
  );
};

export default LineItems;
