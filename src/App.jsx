import { useState } from "react";
import Stagiaire from "./pages/Stagiaire";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Formation from "./pages/Formation.jsx";
import Participation from "./pages/Participation.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Stagiaire />} />
            <Route path="formations" element={<Formation />} /> 
            <Route path="participations" element={<Participation />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
