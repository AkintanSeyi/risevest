import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./component/HomePage/HomePage";
import Header from "./widget/Header/Header";

const App = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <Header toggle={toggle} settoggle={settoggle} />
      <div
        style={{
          height: "fit-content",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <HomePage toggle={toggle} settoggle={settoggle} />
      </div>
    </>
  );
};

export default App;
