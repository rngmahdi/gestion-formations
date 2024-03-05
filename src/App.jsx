import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Formation from "./pages/Formation.jsx";
import Participation from "./pages/Participation.jsx";
import Employee from "./pages/Employee.jsx";
import EditEmployee from "./components/employee/EditEmployee.jsx";
import AddEmployee from "./components/employee/AddEmployee.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Employee />} />
            <Route path="/employee/:id" element={<EditEmployee />} />
            <Route path="/employee/add" element={<AddEmployee />} />
            <Route path="formations" element={<Formation />} /> 
            <Route path="participations" element={<Participation />} /> 
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
