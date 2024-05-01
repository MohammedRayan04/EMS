import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getemployee");
      setEmployees(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      console.log("Deleted successfully");
      getEmployee();
    } catch (error) {
      console.log("Deletion unsuccessful");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 text-white flex justify-between items-center h-16 px-6">
        <div>
          <Link to="/createemployee" className="text-blue-400 hover:text-blue-200">
            Create Employee
          </Link>
        </div>
        <div>
          Total Employees: <span>{employees.length}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="text-black bg-gray-300 rounded-md px-2 py-1"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-yellow-300 text-gray-900 font-bold py-2 px-6">
        List of Employees
      </div>
      <div className="flex justify-center">
        <table className="border-collapse border border-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-600 px-4 py-2">ID</th>
              <th className="border border-gray-600 px-4 py-2">Image</th>
              <th className="border border-gray-600 px-4 py-2">Name</th>
              <th className="border border-gray-600 px-4 py-2">Email</th>
              <th className="border border-gray-600 px-4 py-2">Phone No</th>
              <th className="border border-gray-600 px-4 py-2">Designation</th>
              <th className="border border-gray-600 px-4 py-2">Gender</th>
              <th className="border border-gray-600 px-4 py-2">Course</th>
              <th className="border border-gray-600 px-4 py-2">Create Date</th>
              <th className="border border-gray-600 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) =>
                search.trim() === "" ? true : employee.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((employee) => (
                <tr key={employee._id}>
                  <td className="border border-gray-600 px-4 py-2">{employee._id}</td>
                  <td className="border border-gray-600 px-4 py-2">
                    <img src={employee.image} alt="File Uploaded" className="h-20 w-30 rounded-full" />
                  </td>
                  <td className="border border-gray-600 px-4 py-2">{employee.name}</td>
                  <td className="border border-gray-600 px-4 py-2">{employee.email}</td>
                  <td className="border border-gray-600 px-4 py-2">{employee.phoneNo}</td>
                  <td className="border border-gray-600 px-4 py-2">{employee.designation}</td>
                  <td className="border border-gray-600 px-4 py-2">{employee.gender}</td>
                  <td className="border border-gray-600 px-4 py-2">{employee.course}</td>
                  <td className="border border-gray-600 px-4 py-2">{employee.createdAt}</td>
                  <td className="border border-gray-600 px-4 py-2">
                    <button className="bg-green-600 text-white px-2 py-1 rounded-lg mr-2">
                      <Link to={`/editemployee/${employee._id}`}>Edit</Link>
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-lg"
                      onClick={() => deleteEmployee(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
