import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


export default function App() {
  return (
    <Routes>
      {/* Routes WITH Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
           
          </>
        }
      />

    </Routes>
  );
}
