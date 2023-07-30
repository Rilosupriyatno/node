import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Games from "./pages/Games";
import AddGames from "./pages/AddGames";
import EditGames from "./pages/EditGames";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/add" element={<AddGames />} />
        <Route path="/games/edit/:id" element={<EditGames />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
