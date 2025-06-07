import React, { useState } from "react";

// function handelClick() {
//   return console.log("Page Starting....");
// }

const Content = () => {
  const [landName, setName] = useState("Hi");

  function nameChange() {
    const randomWordName = [
      "Hi",
      "Hello",
      "Vanakkam",
      "Namaskar",
      "Vandanam",
      "Hoola!",
    ];
    const generateRanNames =
      randomWordName[Math.floor(Math.random() * randomWordName.length)];
    // return generateRanNames;
    setName(generateRanNames);
  }
  return (
    <main>
      <div>
        <p>{landName}, Ajay</p>
        <button onClick={nameChange}>Start</button>
      </div>
    </main>
  );
};

export default Content;
