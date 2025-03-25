import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>  {/* ✅ Wrap App inside BrowserRouter */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
