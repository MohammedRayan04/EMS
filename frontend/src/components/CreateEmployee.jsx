import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [courses, setCourses] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const create = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !phoneNo || !designation || !gender || !courses || !file) {
        setError("All fields are required");
        return;
      }
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phoneNo", phoneNo);
      formData.append("designation", designation);
      formData.append("gender", gender);
      courses.forEach(course => formData.append("course", course));
      formData.append("image", file);

      await axios.post("http://localhost:3001/register", formData);
      setError("");
      navigate("/employeelist");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCheckboxChange = (e) => {
    const course = e.target.value;
    if (e.target.checked) {
      setCourses([...courses, course]);
    } else {
      setCourses(courses.filter(c => c !== course));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-yellow-300 text-center py-4 text-xl font-semibold">Create Employee</div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-lg bg-gray-200 rounded-xl p-10 flex justify-center">
          <form className="space-y-5 flex flex-col" onSubmit={create}>
            <div>
              <label className="block">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block">Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block">Mobile:</label>
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block">Designation:</label>
              <select onChange={(e) => setDesignation(e.target.value)} className="border border-gray-400 px-3 py-2 rounded-md w-full">
              <option value="select"> Select </option>
                <option value="HR"> HR </option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div>
              <label className="block">Gender:</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                <label className="mr-4">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                <label>Female</label>
              </div>
            </div>
            <div>
              <label className="block">Course:</label>
              <div className="flex items-center">
                <input type="checkbox" value="MCA" onChange={handleCheckboxChange} className="mr-1" />
                <label className="mr-4">MCA</label>
                <input type="checkbox" value="BCA" onChange={handleCheckboxChange} className="mr-1" />
                <label className="mr-4">BCA</label>
                <input type="checkbox" value="BSC" onChange={handleCheckboxChange} className="mr-1" />
                <label>BSC</label>
              </div>
            </div>
            <div>
              <label className="block">Image:</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border border-gray-400 px-3 py-2 rounded-md w-full" />
            </div>
            <div className="text-red-500">{error}</div>
            <button className="w-2/3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;

