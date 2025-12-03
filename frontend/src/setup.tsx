import { StrictMode } from "react";
import App from "./App.tsx";

export const createApp = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};
