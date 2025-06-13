import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { clubs } from "../data/clubs";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ClubDetailPage() {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joinedClubs, setJoinedClubs] = useLocalStorage("joinedClubs", []);
  const [showJoinMessage, setShowJoinMessage] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const foundClub = clubs.find((c) => c.id === clubId);
      if (foundClub) {
        setClub(foundClub);
        setLoading(false);
      } else {
        setError("Club not found");
        setLoading(false);
      }
    }, 300);
  }, [clubId]);

  const isClubJoined = joinedClubs.includes(clubId);

  const handleJoinClub = () => {
    if (!isClubJoined) {
      setJoinedClubs([...joinedClubs, clubId]);
      setShowJoinMessage(true);
      setTimeout(() => {
        setShowJoinMessage(false);
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !club) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Club Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the club you're looking for.</p>
        <Link to="/clubs" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
          Back to Clubs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {showJoinMessage && (
        <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50">
          <p>You have successfully joined {club.name}!</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 sm:h-80 md:h-96 relative">
          <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{club.name}</h1>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Link to="/clubs" className="text-blue-600 hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Clubs
              </Link>
            </div>

            {isClubJoined ? (
              <div className="bg-green-100 text-green-800 py-2 px-4 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You have joined this club!
              </div>
            ) : (
              <button onClick={handleJoinClub} className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Join Club
              </button>
            )}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="mb-6">{club.description}</p>

            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {club.events.map((event, index) => (
                <div key={index} className={`py-3 ${index < club.events.length - 1 ? "border-b" : ""}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{event.name}</h3>
                    <div className="text-blue-600 font-medium">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
