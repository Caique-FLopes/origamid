import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import AppBasico from "./basico/App.tsx";
import AppHooks from "./hooks/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppHooks />
  </StrictMode>
);
