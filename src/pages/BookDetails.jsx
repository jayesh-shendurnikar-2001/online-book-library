// useParams → to get dynamic route parameter (id)
// Link → for navigation without page reload
import { useParams, Link } from "react-router-dom";

// useSelector → to read data from Redux store
import { useSelector } from "react-redux";

// Default image if book image fails or not provided
const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JKqrQRlKbSAGPyewnePY0TmNzWTeNTyYcg&s";

export default function BookDetails() {

  // Get the id from URL (ex: /books/123)
  const { id } = useParams();

  // Find the book in Redux store using the id
  const book = useSelector(state =>
    state.books.find(b => String(b.id) === id)
  );

  // If book not found, show message
  if (!book) {
    return (
      <p className="text-center mt-40 text-gray-500">
        <b className="text-4xl"> Book not found 😕</b>
        <br />
        <Link
          to="/books"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          ← Back to Browse
        </Link>
      </p>
    );
  }

  // If book exists, show book details
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div className="h-72 w-full overflow-hidden">
          <img
            src={book.url || DEFAULT_IMAGE}  // Use default image if empty
            alt={book.title}
            className="h-full w-full object-cover"

            // If image fails to load, replace with default image
            onError={(e) => {
              e.target.src = DEFAULT_IMAGE;
            }}
          />
        </div>

        {/* Right Side → Book Info */}
        <div className="p-6 space-y-3">
          <h2 className="text-3xl font-bold">{book.title}</h2>

          <p className="text-gray-600">
            <span className="font-semibold">Author:</span>{" "}
            {book.author}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Category:</span>{" "}
            {book.category}
          </p>

          <p className="text-yellow-600 font-semibold">
            ⭐ Rating: {book.rating}
          </p>

          {/* Description Section */}
          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {book.description || "No description available."}
            </p>
          </div>

          {/* Back Button */}
          <Link
            to="/books"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}
