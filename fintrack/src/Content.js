import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import "./index.css";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Saving",
    },
    {
      id: 2,
      checked: true,
      item: "Current",
    },
    {
      id: 3,
      checked: true,
      item: "Child Account",
    },
  ]);

  const handelChange = (id) => {
    console.log(id);
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
  };
  const handelDelete = (id) => {
    console.log(id);
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
  };
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handelChange(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <IoMdTrash onClick={() => handelDelete(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            padding: "2rem",
            textAlign: "center",
            color: "black",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Your List is Empty
        </p>
      )}
    </main>
  );
};

export default Content;
