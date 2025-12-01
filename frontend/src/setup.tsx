import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";

export const createApp = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};
