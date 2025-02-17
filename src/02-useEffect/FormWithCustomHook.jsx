import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hook/index";

export const FormWithCustomHook = () => {
  const { formState, OnInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  //   const { username, email, password } = formState;
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      <h1>Formulario con custom hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contrase;a"
        name="password"
        value={password}
        onChange={OnInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
      {/* {username === "strider2" && <Message />} */}
    </>
  );
};
