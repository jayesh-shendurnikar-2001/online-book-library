import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";

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

      <Route
        path="/books"
        element={
          <>
            <Navbar />
            <BrowseBooks />
          </>
        }
      />

      <Route
        path="/books/:category"
        element={
          <>
            <Navbar />
            <BrowseBooks />
          </>
        }
      />

      <Route
        path="/book/:id"
        element={
          <>
            <Navbar />
            <BookDetails />
          </>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
