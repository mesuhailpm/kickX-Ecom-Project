import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/AppProvider.jsx";

const elem = document.getElementById("root");
const root = createRoot(elem);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
