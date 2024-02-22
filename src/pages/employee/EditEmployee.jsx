import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { MultiSelect } from "primereact/multiselect";
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

export default function EditEmployee() {
  let [employee, setEmployee] = useState([]);
  let [formations, setFormations] = useState([]);
  let data = [{ option: "1" }, { option: "2" }];
  const optionsD = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const { id } = useParams();
  //   console.log(id);
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  useEffect(() => {
    axios.get("http://localhost:8000/employees/" + id).then((res) => {
      setEmployee(res.data);
      // let e = res.data
      // console.log(employee);
    });
    axios.get("http://localhost:8000/formations").then((res) => {
      setFormations(res.data);
      // data = formations;
      // console.log(formations);
    });
  }, []);
  function confirmEdit(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <form
        className="flex mt-4 justify-center content-center items-center bg-slate-300 py-2"
        onSubmit={(e) => confirmEdit(e)}
      >
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
            {/* <select name="formations" id="formations" className="rounded-md px-1">
              <option value="-1" selected>selecter les formations</option>
              {formations.map((formation)=>{
                return (
                  <option value={formation.id}>{formation.title}</option>
                )
              })}
            </select> */}
            {/* <Select>
              <Select
                closeMenuOnSelect={false}
                defaultValue={["select formations"]}
                isMulti
                options={optionsD}
                className="rounded-md"
                // styles={colourStyles}
              />
            </Select> */}
            {/* <MultiSelect
              value={selectedCities}
              options={cities}
              optionLabel="name"
              placeholder="Select Cities"
              maxSelectedLabels={3}
              className="w-full md:w-20rem"
            /> */}
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Select Cities"
              maxSelectedLabels={3}
              className="w-full md:w-20rem bg-white"
            />
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
