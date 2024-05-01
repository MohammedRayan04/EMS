import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-yellow-300 flex items-center justify-center">
        <div className="text-5xl font-bold text-center">
          Welcome to Admin Panel
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
