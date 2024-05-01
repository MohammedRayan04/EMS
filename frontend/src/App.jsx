import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeEdit from "./components/EmployeeEdit";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
          <Route path="/editemployee/:id" element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
