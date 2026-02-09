import { useDispatch } from "react-redux";
import { addBook } from "../features/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Default image if user does not provide one
const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JKqrQRlKbSAGPyewnePY0TmNzWTeNTyYcg&s";

export default function AddBook() {
  // Local state to store form data
  const [form, setForm] = useState({});

  // Redux dispatch function
  const dispatch = useDispatch();

  // Navigation function from react-router
  const navigate = useNavigate();

  // Function runs when form is submitted
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    // checking required fields
    if (!form.title || !form.author || !form.category || !form.rating) {
      alert("All fields required");
      return;
    }

    // rating must be between 1 and 5
    if (form.rating < 1 || form.rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    // Dispatch addBook action to Redux store
    dispatch(
      addBook({
        ...form,
        id: Date.now(),
        url: form.url || DEFAULT_IMAGE,
        rating: Number(form.rating),
      })
    );

    // Navigation function from react-router
    navigate("/books");
  }

  return (
    // Form element with submit handler
    <form onSubmit={handleSubmit} className="p-6 space-y-3">
      <label>
        Book Title <span className="text-red-600">*</span>
      </label>
      <input
        required
        placeholder="Title"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <label>
        Author Name <span className="text-red-600">*</span>
      </label>
      <input
        required
        placeholder="Author"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <label>
        Select Category <span className="text-red-600">*</span>
      </label>
      <select
        required
        className="border p-2 w-full"
        defaultValue=""
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Adventure">Adventure</option>
        <option value="Coding">Coding</option>
      </select>

      <label>
        Rating <span className="text-red-600">*</span>
      </label>
      <input
        required
        type="float"
        placeholder="Rating (1–5)"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
      />

      <label>Img Url (Optional)</label>
      <input
        placeholder="Image URL (optional)"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, url: e.target.value })}
      />

      <label>Description</label>
      <textarea
        placeholder="Description"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      {/* Submit Button */}
      <button
        className="
        bg-green-500 text-white px-5 py-2 rounded-lg
        shadow-[0_8px_24px_oklch(0_0_0_/_0.16)]
        transition-all duration-300 ease-out
        hover:bg-green-600 hover:-translate-y-1 hover:shadow-[0_12px_32px_oklch(0_0_0_/_0.18)]
        active:translate-y-0 active:scale-95"
      >
        Add Book
      </button>
    </form>
  );
}
