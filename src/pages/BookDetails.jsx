import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JKqrQRlKbSAGPyewnePY0TmNzWTeNTyYcg&s";

export default function BookDetails() {
  const { id } = useParams();

  const book = useSelector(state =>
    state.books.find(b => String(b.id) === id)
  );

  if (!book) {
    return (
      <p className="text-center mt-40 text-gray-500">
        <b className="text-4xl"> Book not found 😕</b>
        <br></br>
        <Link
            to="/books"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            ← Back to Browse
          </Link>
      </p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Image */}
        <div className="h-72 w-full overflow-hidden">
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

          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {book.description || "No description available."}
            </p>
          </div>

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
