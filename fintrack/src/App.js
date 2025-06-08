import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useState } from "react";

function App() {
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
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };
  const handelDelete = (id) => {
    console.log(id);
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  return (
    <div className="App">
      <Header title="Lets start you checklist" />
      <Content
        items={items}
        handelChange={handelChange}
        handelDelete={handelDelete}
      />
      <Footer listLength={items.length} />
    </div>
  );
}

export default App;
