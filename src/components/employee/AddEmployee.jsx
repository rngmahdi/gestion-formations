import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Select, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux"
import { setFormations } from "../../redux/actions";
// import Select from "react-select";
// import { MultiSelect } from "primereact/mul:tiselect";
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

export default function AddEmployee() {
  const dispatch = useDispatch();
  let [employee, setEmployee] = useState([]);
  // let [formations, setFormations] = useState([]);
  const { formations } = useSelector((state) => {
    return {
      formations: state.formations
    };
  });
  useEffect(() => {
    axios.get("http://localhost:8000/formations").then((res) => {
      dispatch(setFormations(res.data));
    });
    // console.log(formations);
  }, []);
  const { id } = useParams();
  // useEffect(() => {
  //   axios.get("http://localhost:8000/employees/" + id).then((res) => {
  //     setEmployee(res.data);
  //   });
  //   axios.get("http://localhost:8000/formations").then((res) => {
  //     setFormations(res.data);
  //   });
  // }, []);
  function confirmAdd(e) {
    e.preventDefault();
    console.log(formations);
  }
  return (
    <div>
      <form
        className="flex justify-center  bg-slate-400 "
        onSubmit={(e) => confirmAdd(e)}
      >
        <div className="flex flex-col mt-4 h-screen">
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              name="id"
              placeholder="id"
              value={employee.id}
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1  "
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              value={employee.nom}
              placeholder="entrer le nom"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1 "
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              name="prenom"
              value={employee.prenom}
              placeholder="entrer le prenom"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={employee.age}
              placeholder="entrer l'age"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2 text-center">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              name="telephone"
              value={employee.telephone}
              placeholder="entrer le telephone"
              className="rounded-md border-2 border-gray-300 bg-white py-0 pl-2 pr-7 text-gray-500 focus:outline-slate-500 focus:outline-1"
            />
          </div>
          <div className="grid grid-cols-2 mb-2  text-center">
            {/* <Flex> */}
            <label htmlFor="formations">Formations</label>
            <Select
              mode="multiple"
              // defaultValue={optionsS.map((option) => option.value)}
              style={{ maxWidth: 250 }}
              placeholder="Selecter les formations"
              allowClear
              
              optionFilterProp="children"
              options={formations}
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
            />
            {/* </Flex> */}
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
