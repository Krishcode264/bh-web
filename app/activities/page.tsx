import Image from "next/image";
import React from "react";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import logo from "../../public/ficon.jpg";

const ActivitiesPage = () => {
  const activities = [
    {
      id: 1,
      title: "Need someone to visit a place nearby?",
      description: "Create an event and connect with people nearby who also want to visit that place in the same time range. Explore local attractions together and make new memories.",
      icon: "📍",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Solo traveler in a new city? No worries!",
      description: "Find companions from that native city to show you around or just have fun together. Connect with other solo travelers to explore places and create unforgettable experiences.",
      icon: "✈️",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Lonely at home and doom scrolling?",
      description: "Visit the events page and see nearby events and people around you looking for mates for activities. Find nearby activities by location and break the cycle of isolation.",
      icon: "🏠",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Looking for a coding partner?",
      description: "Connect with fellow developers for pair programming sessions, hackathons, or coding challenges. Learn together, build projects, and grow your skills.",
      icon: "💻",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 5,
      title: "Want to practice a hobby?",
      description: "Find people who share your passion for dance, swimming, photography, or any hobby. Practice together, improve your skills, and enjoy your favorite activities with like-minded companions.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      title: "Need a workout buddy?",
      description: "Connect with fitness enthusiasts for gym sessions, running, cycling, or outdoor workouts. Stay motivated, push each other, and achieve your fitness goals together.",
      icon: "💪",
      gradient: "from-green-500 to-lime-500",
    },
    {
      id: 7,
      title: "Want to explore food scenes?",
      description: "Find food lovers to try new restaurants, street food, or cooking together. Discover hidden gems in your city and share culinary adventures with fellow food enthusiasts.",
      icon: "🍽️",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "Interested in cultural events?",
      description: "Connect with people who want to attend concerts, art exhibitions, theater shows, or cultural festivals. Share experiences and discover the vibrant cultural scene in your area.",
      icon: "🎭",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-violet-100 to-pink-100 font-sans">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-10 p-2 rounded-xl bg-violet-200/50 backdrop-blur-sm w-20 h-20 flex items-center justify-center">
        <Image className="w-16 h-16 rounded-xl" src={logo} alt="Bold Hug Logo" />
      </div>

      {/* Top Navigation */}
      <TopNav />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-violet-600 via-blue-500 to-pink-500 bg-clip-text text-transparent font-dancing-script">
              Activity Match
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover endless possibilities for connection. Whether you're exploring new places, 
            pursuing hobbies, or simply looking for companionship, BoldHug helps you find the perfect people for every moment.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-violet-700 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/30 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Connecting?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already finding their perfect activity companions. 
            Download BoldHug today and turn every moment into an opportunity for connection.
          </p>
          <Link 
            href="/#download"
            className="inline-block bg-gradient-to-r from-violet-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;