import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function EditEmployee() {
  let [employee, setEmployee] = useState([]);
  let [formations, setFormations] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    axios.get("http://localhost:8000/employees/" + id).then((res) => {
      setEmployee(res.data);
      // let e = res.data
      console.log(employee);
    });
    axios.get("http://localhost:8000/formations").then((res) => {
      setFormations(res.data);
      console.log(formations);
    });
  }, []);
  return (
    <div>
      <form className="flex mt-4 justify-center content-center items-center bg-slate-300 py-2">
        <div className="flex flex-col mt-4 justify-center">
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              name="id"
              placeholder="id"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1  "
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              placeholder="entrer le nom"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1 "
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              name="prenom"
              placeholder="entrer le prenom"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              placeholder="entrer l'age"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              name="telephone"
              placeholder="entrer le telephone"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2  text-center">
            <label htmlFor="formations">Formations</label>
            {/* <input type="text" name="telephone" className="border ml-2"/> */}
            <select name="formations" id="formations" className="rounded-md px-1">
              <option value="-1" selected>selecter les formations</option>
              {formations.map((formation)=>{
                return (
                  <option value={formation.id}>{formation.title}</option>
                )
              })}
            </select>
          </div>
          <div className=" my-2  flex justify-end ">
            <button className="rounded-lg bg-blue-500 text-white text-lg p-2">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
