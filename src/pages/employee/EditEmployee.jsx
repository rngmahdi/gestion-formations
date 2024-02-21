import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function EditEmployee() {
  let [employee, setEmployee] = useState([]);
  let [formations,setFormations] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    axios.get("http://localhost:8000/employees/" + id).then((res) => {
      setEmployee(res.data);
      // let e = res.data
      console.log(employee);
    });
    axios.get("http://localhost:8000/formations")
    .then(res => {
      setFormations(res.data);
      console.log(formations)
    })
  }, []);
  return (
    <div>
      <form className="flex flex-col mt-4 justify-center items-center bg-slate-300 py-2">
         <div className="grid grid-cols-2 mb-2 w-1/3 text-center" >
            <label htmlFor="id">Id</label>
            <input type="text" name="id" className="border ml-2"/>
         </div>
         <div className="grid grid-cols-2 mb-2 w-1/3 text-center" >
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" className="border ml-2"/>
         </div>
         <div className="grid grid-cols-2 mb-2 w-1/3 text-center" >
            <label htmlFor="prenom">Prenom</label>
            <input type="text" name="prenom" className="border ml-2"/>
         </div>
         <div className="grid grid-cols-2 mb-2 w-1/3 text-center" >
            <label htmlFor="age">Age</label>
            <input type="number" name="age" className="border ml-2"/>
         </div>
         <div className="grid grid-cols-2 mb-2 w-1/3 text-center" >
            <label htmlFor="telephone">Telephone</label>
            <input type="text" name="telephone" className="border ml-2"/>
         </div>
         <div className="grid grid-cols-2 mb-2 w-1/3 text-center" >
            <label htmlFor="formations">Telephone</label>
            {/* <input type="text" name="telephone" className="border ml-2"/> */}
            <select name="" id=""></select>
         </div>
         
      </form>
    </div>
  );
}
