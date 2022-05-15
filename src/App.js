import React, { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [modal, setModal] = useState(false);
  const popup = () => {
    setModal(!modal);
  };
  return (
    <div className="home">
      <Header modal={modal} popup={popup} />
    </div>
  );
}

export default App;
