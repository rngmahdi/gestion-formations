import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
// import ThemeSwitcher from './components/themeSwitcher';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {/* <ThemeSwitcher /> */}
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
