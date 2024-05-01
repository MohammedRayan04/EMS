import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.png"; // Import your logo image

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize admin credentials in localStorage
    localStorage.setItem(
      "admin",
      JSON.stringify({
        username: "User123",
        password: "car786",
      })
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve admin credentials from localStorage
    const adminCredentials = JSON.parse(localStorage.getItem("admin"));

    // Validate username and password
    if (username.trim() === "" || password.trim() === "") {
      setError("Please provide the valid credential");
    } else if (
      adminCredentials.username !== username ||
      adminCredentials.password !== password
    ) {
      setError("Invalid username or password");
    } else {
      // Clear error and navigate to dashboard
      setError("");
      setUsername("");
      setPassword("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-300">
      {/* Navbar with Logo */}
      <nav className="flex items-center justify-between bg-black text-white p-4">
        <span className="text-xl font-bold">Explore Your Universe</span> {/* Navbar heading */}
        <img src={logo} alt="Logo" className="w-12 h-12" /> {/* Display the logo */}
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="py-4 px-6">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Username:</label>
                  <input
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Password:</label>
                  <input
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



