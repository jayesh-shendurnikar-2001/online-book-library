import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
   // state for hamburger menu close on desktop and open in mobile
  const [open, setOpen] = useState(false); 
 
  return (
    <nav
      className="bg-gray-200  px-6 py-4"
      style={{ boxShadow: "0 2px 8px oklch(0 0 0 / 0.16)" }}
    >
      <div className="flex items-center justify-between md:justify-evenly">
        {/* Logo */}
        <Link to="/">
          <img
            src="data:image/png;base64,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"
            height="40px"
            width="40px"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link
            className="
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-black
                after:transition-all after:duration-300
                hover:after:w-full hover:text-black
              "
            to="/"
          >
            Home
          </Link>
          <Link
            className="
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-black
                after:transition-all after:duration-300
                hover:after:w-full hover:text-black
              "
            to="/books"
          >
            Browse All Books
          </Link>
          <Link
            className="
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-black
                after:transition-all after:duration-300
                hover:after:w-full hover:text-black
              "
            to="/add-book"
          >
            Add Book
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden items-center">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/books" onClick={() => setOpen(false)}>
            Browse Books
          </Link>
          <Link to="/add-book" onClick={() => setOpen(false)}>
            Add Book
          </Link>
        </div>
      )}
    </nav>
  );
}
