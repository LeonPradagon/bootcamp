import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img src="/images/campus-hero.png" alt="Students at campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/60 flex items-center">
            <div className="px-6 md:px-12 text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Find Your Community</h1>
              <p className="text-lg md:text-xl mb-6 max-w-lg">Discover student clubs that match your interests and passions. Join a community where you belong.</p>
              <Link to="/clubs" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-block">
                Explore Clubs
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Campus Club Finder</h2>
          <p className="mb-4">Campus Club Finder helps you discover and connect with student organizations across campus. Whether you're interested in academics, arts, sports, or community service, there's a club waiting for you.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Discover</h3>
              <p>Browse through our diverse collection of student clubs and organizations.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Learn</h3>
              <p>Get detailed information about each club's activities, events, and mission.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Join</h3>
              <p>Express your interest in clubs and get connected with club leaders.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/clubs" className="bg-blue-600 text-white py-3 px-8 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors inline-block">
              Browse All Clubs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
