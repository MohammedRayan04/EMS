import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem("admin"));

  return (
    <nav className="bg-black text-white h-20 flex justify-between items-center px-8">
      <div>
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
      </div>
      <div>
        <Link
          to="/employeelist"
          className="text-xl font-bold ml-8 hover:text-blue-500"
        >
          Employee List
        </Link>
      </div>
      <div className="text-lg">
        Logged in as:{" "}
        <span className="text-blue-500 font-bold">{username}</span>
      </div>
      <div>
        <button
          className="text-red-500 font-semibold hover:underline"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

