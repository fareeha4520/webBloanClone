import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  "First Time Homebuyer",
  "Credit Building",
  "Building Wealth Around Real Estate",
  "Refinance",
  "Self Employed Home Buyer",
  "Veteran",
  "Mortgage 101",
  "Rent vs Buy",
  "Your Mortgage Team",
  "Home Seller",
];

const EducationSection = ({ setScheduleOpen,setContactOpen }) => {
  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = 200;
  const gap = 24;
  const step = cardWidth + gap;

  const next = () => {
    if (index < cards.length - visibleCount) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const canPrev = index > 0;
  const canNext = index < cards.length - visibleCount;

  return (
    <div className="w-full bg-gray-200 py-12 md:py-20 px-4 sm:px-6 md:px-10 rounded-2xl mt-3 mb-3">
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        
        <div className="w-full lg:w-[600px]">
          <p className="text-green-700 font-bold tracking-[4px] mb-6 text-sm">
            EDUCATION
          </p>

          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            Learn More About Us And Fit Your Unique Needs
          </h1>

          <p className="text-gray-500 mt-6 text-sm">
            Here to guide you along your home buying journey:
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={() => setScheduleOpen(true)}
              className="bg-green-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-1"
            >
              Schedule Intro Call <ArrowRight size={18} />
            </button>

            <button
             onClick={() => setContactOpen(true)}
             className="border border-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-black">
              Quick Contact <ArrowRight size={18} />
            </button>
          </div>
        </div>

        
        <div className="w-full lg:w-[650px]">

        
          <div className="overflow-hidden">

            
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${index * step}px)` }}
            >
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[200px] h-[260px] bg-green-800 text-white rounded-b-3xl p-6 flex flex-col justify-between flex-shrink-0"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-8 h-5 object-contain"
                      src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
                      alt="logo"
                    />
                    <span className="text-sm tracking-wider">ADRIAN WEBB</span>
                  </div>

                  <h2 className="text-xl font-bold">{item}</h2>

                  <button className="flex items-center gap-2 text-sm underline font-bold">
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          
          <div className="flex items-center gap-4 mt-6 justify-center">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-12 h-12 rounded-full text-white shadow flex items-center justify-center transition-opacity duration-200 ${
                canPrev ? "bg-black" : "bg-gray-400 opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={!canNext}
              className={`w-12 h-12 rounded-full text-white flex items-center justify-center transition-opacity duration-200 ${
                canNext ? "bg-black" : "bg-gray-400 opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationSection;