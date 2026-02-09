import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <Routes>
      {/* Routes WITH Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
           
          </>
        }
      />

    </Routes>
  );
}
