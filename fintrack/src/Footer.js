import React from "react";

const Footer = ({ listLength }) => {
  return (
    <footer>
      {listLength} List {listLength === 1 ? "item" : "items"}
    </footer>
  );
};

export default Footer;
