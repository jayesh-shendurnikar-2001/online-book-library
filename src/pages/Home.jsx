import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Adventure", "Coding"];

export default function Home() {
  // Redux se books
  const books = useSelector((state) => state.books);

// showing books whose rating more than 4
  const popularBooks = books.filter((book) => Number(book.rating) > 3);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        📚 Welcome to Online Library
      </h1>

      {/* Categories */}
      <h1 className="text-2xl mb-2">
        <b>Categories</b>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className="
        bg-gray-200 p-5 rounded-xl text-center font-medium
        transform transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        hover:shadow-xl hover:bg-blue-100
      "
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h2 className="text-xl mb-4">
        🔥 <b>Popular Books (4+ ⭐) </b>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {popularBooks.map((book) => (
          <div
            key={book.id}
            className="
        bg-white shadow p-4 rounded-xl
        transform transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        hover:shadow-2xl
      "
          >
            <img
              src={book.url}
              alt={book.title}
              className="h-45 w-full object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-sm">⭐ {book.rating}</p>

            <Link
              to={`/book/${book.id}`}
              className="text-blue-600 text-sm mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
