import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [values,setValues] = useState(null);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      name: e.name,
      email: e.email,
      age: e.age

    }
    setValues(value);

  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
      { values && (
      <>
        Your entered details are:
        <br />
        Name: {name}
        <br />
        Email: {email}
        <br />
        Age: {age}
      </>
      )
    }
    </>
  );
}

export default UserForm;
