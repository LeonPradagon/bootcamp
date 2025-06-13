import { useState } from "react";
import { clubs } from "../data/clubs.jsx";
import ClubCard from "../components/ClubCard.jsx";

export default function ClubListPage() {
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'

  // Sort clubs based on current sort order
  const sortedClubs = [...clubs].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div>
      <h1>Student Clubs</h1>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <label htmlFor="sort" className="mr-2 font-medium">
            Sort by:
          </label>
          <select id="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border rounded py-1 px-2">
            <option value="asc">Name A-Z</option>
            <option value="desc">Name Z-A</option>
          </select>
        </div>

        <div className="flex items-center">
          <span className="mr-2 font-medium">View:</span>
          <div className="flex border rounded overflow-hidden">
            <button onClick={() => setViewType("grid")} className={`py-1 px-3 ${viewType === "grid" ? "bg-blue-600 text-white" : "bg-white"}`} aria-label="Grid view">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button onClick={() => setViewType("list")} className={`py-1 px-3 ${viewType === "list" ? "bg-blue-600 text-white" : "bg-white"}`} aria-label="List view">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
        ${viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
      `}
      >
        {sortedClubs.map((club) => (
          <ClubCard key={club.id} club={club} viewType={viewType} />
        ))}
      </div>
    </div>
  );
}
