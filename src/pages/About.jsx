export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1>About Campus Club Finder</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Campus Club Finder is designed to help students discover and connect with student organizations that match their interests and passions. We believe that joining clubs is an essential part of the college experience, providing
            opportunities for personal growth, skill development, and building lasting friendships.
          </p>
          <p>Our platform makes it easy to browse clubs, learn about their activities, and express interest in joining. We're committed to fostering a vibrant campus community where every student can find their place.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">1. Browse</div>
              <p>Explore our comprehensive directory of student clubs and organizations.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">2. Discover</div>
              <p>Learn about each club's mission, activities, and upcoming events.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">3. Join</div>
              <p>Express your interest in clubs that align with your passions and goals.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <p className="mb-4">Campus Club Finder is built using modern web technologies to provide a fast, responsive, and user-friendly experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Vite:</span> For fast development and optimized builds
            </li>
            <li>
              <span className="font-semibold">React:</span> For building a dynamic and interactive user interface
            </li>
            <li>
              <span className="font-semibold">React Router:</span> For seamless navigation between pages
            </li>
            <li>
              <span className="font-semibold">Tailwind CSS:</span> For responsive and customizable styling
            </li>
            <li>
              <span className="font-semibold">localStorage:</span> For persisting user preferences and joined clubs
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
