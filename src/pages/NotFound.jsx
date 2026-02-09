import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>

      {/* Invalid URL */}
      <p className="text-sm text-gray-500 mb-6">
        Invalid Route: <span className="font-mono">{location.pathname}</span>
      </p>

      {/* Back to Home */}
      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
