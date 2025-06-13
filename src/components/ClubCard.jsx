import { Link } from "react-router-dom";

export default function ClubCard({ club, viewType }) {
  const isGridView = viewType === "grid";

  return (
    <div
      className={`
      bg-white rounded-lg shadow-md overflow-hidden border border-gray-200
      ${isGridView ? "flex flex-col h-full" : "flex flex-col md:flex-row"}
    `}
    >
      <div
        className={`
        ${isGridView ? "h-48" : "h-48 md:h-auto md:w-1/3"}
      `}
      >
        <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
      </div>
      <div
        className={`
        p-4 flex flex-col
        ${isGridView ? "" : "md:w-2/3"}
      `}
      >
        <h3 className="text-xl font-bold mb-2">{club.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{club.shortDescription}</p>
        <Link to={`/clubs/${club.id}`} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center">
          View Details
        </Link>
      </div>
    </div>
  );
}
