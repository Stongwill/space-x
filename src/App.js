import React, { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [modal, setModal] = useState(false);
  const popup = () => {
    setModal(!modal);
  };
  return (
    <>
      <Header modal={modal} popup={popup} />
    </>
  );
}

export default App;
