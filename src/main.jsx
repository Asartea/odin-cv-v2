import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const rootNode = document.getElementById("root");
createRoot(rootNode).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
