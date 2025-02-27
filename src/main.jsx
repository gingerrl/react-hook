import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import "./index.css";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemorizeHook";
import { CallbackHook } from "./06-memos/Callback";
import { Padre } from "./07-tarea-memo/Padre";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <TodoApp />

  // </StrictMode>
);
