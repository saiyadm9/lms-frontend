import React from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      text: "This LMS is incredible! The courses are well-organized and the content is top-notch.",
      date: "2025-02-28",
    },
    {
      name: "Jane Smith",
      rating: 4,
      text: "I really enjoyed the learning experience. The user interface could use some improvements.",
      date: "2025-01-15",
    },
    {
      name: "Michael Clark",
      rating: 5,
      text: "Fantastic platform with excellent customer support. Highly recommend it!",
      date: "2024-12-30",
    },
    {
      name: "Michael Cl.",
      rating: 5,
      text: "Fantastic platform with excellent customer support. Highly recommend it!",
      date: "2024-12-30",
    },
    {
      name: "Clark",
      rating: 5,
      text: "Fantastic platform with excellent customer support. Highly recommend it!",
      date: "2024-12-30",
    },
  ];

  return (
    <div className="py-20 px-6 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto text-center relative">
        <div className="absolute inset-y-0 left-[-2] w-24 bg-gradient-to-r from-white to-[#ffffff00] bg-transparent z-20 hidden md:block"></div>
        <div className="absolute inset-y-0 right-[-2] w-24 bg-gradient-to-l  from-white to-[#ffffff00] bg-transparent z-20 hidden md:block"></div>
        <h2 className="text-5xl font-semibold mb-12 text-gray-900">
          User Reviews
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-10 animate-scroll">
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${review.date}`}
                className="bg-white shadow-lg rounded-xl border-2 border-dashed p-8 text-center relative w-96 m-4 flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 text-black text-4xl font-bold p-2">
                  <Quote size={40} className="rotate-180 opacity-20" />
                </div>
                <div className="absolute bottom-0 right-0 text-black text-4xl font-bold p-2">
                  <Quote size={40} className="opacity-20" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-6 w-6 ${
                        idx < review.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                  "{review.text}"
                </p>
                <hr className="border-t-2 border-yellow-500 w-20 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 italic">
                  {review.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite; /* Adjust duration */
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default Reviews;
