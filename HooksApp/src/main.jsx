import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// ======== 01 - useState ========== //

// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'

// ======== 02 - useEffect ========== //

// import { SimpleForm} from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'

// ======== 03 - Examples ========== //
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx'

// ======== 04 - useRef ========== //
import { FocusScreen } from "./04-useRef/FocusScreen.jsx";

// ======== 05 - useLayoutEffect ========== //
import { Layout } from "./05-useLayoutEffect/Layout.jsx";

// ======== 06 - useMemorize ========== //
import { Memorize } from "./06-memos/Memorize.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Memorize />,
  /* </StrictMode>, */
);
