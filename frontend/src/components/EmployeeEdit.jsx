import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [,setFile] = useState("");
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/${params.id}`)
      .then(({ data }) => data.data)
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPhoneNo(data.phoneNo);
        setDesignation(data.designation);
        setCourse(data.course);
        setGender(data.gender);
        setFile(data.file);
      })
      .catch(() => console.log("error"));
  }, [params.id]);

  return (
    <div className="bg-gray-400 min-h-screen">
      <Navbar />
      <div className="text-2xl font-bold text-center py-6 bg-yellow-300">Edit Employee</div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-lg bg-white rounded-xl p-8 flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Name:</label>
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Email:</label>
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Mobile:</label>
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-md"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Designation:</label>
            <select
              className="border border-gray-400 p-2 rounded-md"
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="HR" selected={designation === "HR"}>
                HR
              </option>
              <option value="Manager" selected={designation === "Manager"}>
                Manager
              </option>
              <option value="Sales" selected={designation === "Sales"}>
                Sales
              </option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-semibold mr-4">Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              className="ml-4"
            />{" "}
            Female
          </div>
          <div className="flex items-center">
            <label className="text-lg font-semibold mr-4">Course:</label>
            <input
              type="checkbox"
              value="MCA"
              checked={course === "MCA"}
              onChange={(e) => setCourse(e.target.value)}
              className="mr-1"
            />
            MCA
            <input
              type="checkbox"
              value="BCA"
              checked={course === "BCA"}
              onChange={(e) => setCourse(e.target.value)}
              className="mx-1"
            />
            BCA
            <input
              type="checkbox"
              value="BSC"
              checked={course === "BSC"}
              onChange={(e) => setCourse(e.target.value)}
              className="ml-1"
            />
            BSC
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Image:</label>
            <input type="file" className="border border-gray-400 p-2 rounded-md" />
          </div>
          <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Update</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;

