import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-gray-200 p-4 h-screen">
      <App />
    </div>
  </StrictMode>
);
