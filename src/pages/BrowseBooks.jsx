import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JKqrQRlKbSAGPyewnePY0TmNzWTeNTyYcg&s";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState("");

  const filtered = books.filter(book =>
    (!category || book.category === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      {/* Search */}
      <input
        placeholder="🔍 Search by title or author"
        className="border p-3 mb-6 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={e => setSearch(e.target.value)}
      />

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filtered.map(book => (
          <div
            key={book.id}
            className="
              bg-white rounded-xl shadow
              transform transition-all duration-300
              hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
            "
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden rounded-t-xl">
              <img
                src={book.url || DEFAULT_IMAGE}
                alt={book.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = DEFAULT_IMAGE;
                }}
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm">⭐ {book.rating}</p>

              <Link
                to={`/book/${book.id}`}
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          <b>No books found for { category } category 😕</b>
          <br></br>
          <Link
            to="/"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
          &nbsp;
          ||
          &nbsp;
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
        </p>
      )}
    </div>
  );
}
