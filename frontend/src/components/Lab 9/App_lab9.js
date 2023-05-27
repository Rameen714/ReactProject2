import React, { useState, useRef } from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import ScrollToTopButton from "./ScrollToTopButton";
import UserForm from "./UserForm";

function App_lab9() {
  const [name, setName] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };


  return (
    <div >
      <span>Enter Your Name:</span>
      <input type="text" value={name} onChange={handleChange} />
      <Greeting name={name}/>
      <Clock/>
      <ScrollToTopButton/>
      <UserForm/>
    </div>
  );
}

export default App_lab9;