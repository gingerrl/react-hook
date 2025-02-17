import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "ginger@gmail.com",
  });

  const { username, email } = formState;

  const OnInputChange = ({ target }) => {
    // console.log(event.target.value)
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect")
  },[]);
  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={OnInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="ggg@google.com"
        name="email"
        value={email}
        onChange={OnInputChange}
      />

    {
      username === 'strider2' &&  <Message/>  
      
    }

     
    </>
    
  );
};

