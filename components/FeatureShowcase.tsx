import Image from "next/image";
import React from "react";
import homePhoto from "../public/h.png";
import eventPhoto from "../public/e.png";
import profilePhoto from "../public/p.png";
import chatPhoto from "../public/up2.png";

const FeatureShowcase = () => {
  const features = [
    {
      id: 1,
      title: "Share Your Moments",
      description: "Create and share posts about your activities, experiences, and moments. Let others see what you're up to and inspire them to join similar activities.",
      image: homePhoto,
      alt: "Sharing posts feature",
      reverse: false,
    },
    {
      id: 2,
      title: "Create & Join Events",
      description: "Organize your own events or discover exciting activities happening around you. From sports meetups to travel plans, find your perfect match.",
      image: eventPhoto,
      alt: "Create and join events feature",
      reverse: true,
    },
    {
      id: 3,
      title: "Manage Your Profile",
      description: "Keep track of your posts, events, and connections. See your activity history, manage your friends list, and showcase your interests.",
      image: profilePhoto,
      alt: "Profile management feature",
      reverse: false,
    },
    {
      id: 4,
      title: "Update Your Profile",
      description: "Keep your profile fresh and up-to-date. Update your photos, personal information, and preferences to help others get to know you better.",
      image: chatPhoto,
      alt: "Profile update feature",
      reverse: true,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover all the features that make BoldHug the perfect platform for connecting with like-minded people
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="flex-1 max-w-md">
                <div className="relative group">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    className="rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/20 to-pink-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 max-w-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {feature.id}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-700">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-violet-600 font-medium">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;