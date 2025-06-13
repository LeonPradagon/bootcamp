import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">Oops! The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
