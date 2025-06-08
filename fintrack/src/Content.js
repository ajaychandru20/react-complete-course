import "./index.css";
import ListItems from "./ListItems";

const Content = ({ items, handelChange, handelDelete }) => {
  return (
    <main>
      {items.length ? (
        <ListItems
          items={items}
          handelChange={handelChange}
          handelDelete={handelDelete}
        ></ListItems>
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
