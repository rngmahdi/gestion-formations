import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Input } from 'antd';

export default function EditEmployee() {
  let [employee, setEmployee] = useState([]);
  let [formations, setFormations] = useState([]);
  const { id } = useParams();
  const cities = [
    { label: "New York", code: "NY" },
    { label: "Rome", code: "RM" },
    { label: "London", code: "LDN" },
    { label: "Istanbul", code: "IST" },
    { label: "Paris", code: "PRS" },
  ];
  let [nom,setNom] = useState();
  let [prenom,setPrenom] = useState();
  let [age,setAge] = useState();
  let [telephone,setTelephone] = useState();
  useEffect(() => {
    axios.get("http://localhost:8000/employees/" + id).then((res) => {
      setEmployee(res.data);
      setNom(employee.nom)
      setPrenom(employee.prenom)
      setAge(employee.age)
      setTelephone(employee.telephone)
      // let e = res.data
      console.log(employee);
    });
    axios.get("http://localhost:8000/formations").then((res) => {
      setFormations(res.data);
      // data = formations;
      // console.log(formations);
    });
  }, []);

  function confirmEdit(e) {
    e.preventDefault();
    // console.log(data);
    console.log(nom , prenom , age , telephone);
  }
  return (
    <div>
      <form
        className="flex justify-center content-center items-center bg-slate-400 py-4"
        onSubmit={(e) => confirmEdit(e)}
      >
        <div className="flex flex-col mt-4 justify-center">
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              name="id"
              placeholder="id"
              defaultValue={employee.id}
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1  "
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              defaultValue={employee.nom}
              onChange={(e)=>{setNom(e.target.value)}}
              placeholder="entrer le nom"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1 "
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              name="prenom"
              defaultValue={employee.prenom}
              onChange={(e)=>{setPrenom(e.target.value)}}
              placeholder="entrer le prenom"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              defaultValue={employee.age}
              onChange={(e)=>{setAge(e.target.value)}}

              placeholder="entrer l'age"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              name="telephone"
              defaultValue={employee.telephone}
              onChange={(e)=>{setTelephone(e.target.value)}}
              placeholder="entrer le telephone"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2  text-center">
            {/* <label h  tmlFor="formations">Formations</label> */}
            {/* <Select
              defaultValue={[formations[0],formations[1]]}
              placeholder="select formations"
              // defaultInputValue={formations[0]}
              isMulti
              closeMenuOnSelect={false}
              name="formations"
              options={formations}
              className="w-80 text-left"
              isOptionSelected={(code)=>{}}
              // classNamePrefix="select"
            /> */}
          </div>
          <div className=" my-2  flex justify-end ">
            <button className="rounded-lg bg-blue-500 text-white text-lg p-2">
              Confirm
            </button>
            <button className="rounded-lg bg-blue-500 text-white text-lg p-2 mx-4">
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
