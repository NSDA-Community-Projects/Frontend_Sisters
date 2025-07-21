// src/pages/EventSection.jsx
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const staticEvents = [
  {
    title: "Replay Our Powerful Podcast Event and Get Inspired.",
    image: "https://i.pinimg.com/736x/3f/a8/47/3fa847a2e8988b4f4a6d978d8ac7e96e.jpg",
  },
  {
    title: "Together Again: A Recap of Our Amazing Gathering.",
    image: "https://i.pinimg.com/736x/22/ad/57/22ad57e1022e3975b23c2d3bb96f36d8.jpg",
  },
  {
    title: "A Look Back: Reviewed Projects from Our Talented Mentees.",
    image: "https://i.pinimg.com/736x/f5/0b/32/f50b3288037363825f12a26edd441129.jpg",
  },
];

export default function EventSection() {
  const [events, setEvents] = useState(staticEvents);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  // Optional: fetch from Supabase (uncomment if needed)
  /*
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select('*');
      if (!error && data) setEvents(data);
    };
    fetchEvents();
  }, []);
  */

  return (
     <section className="min-h-screen bg-[#FAF7F4] px-4 py-10 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-25">
        {/* LEFT */}
           <div className="md:w-1/2 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#025176] leading-tight">
            Recent{' '} <br />
         <span className="text-[#025176]">
  <span className="inline-block border-b-[6px] border-[#025176]">Eve</span>nts
</span>

          </h2>
           <p className="mt-4 text-sm text-gray-700">
            Amazing moments await. Secure your spot and stay in the loop!
          </p>
        </div>

        {/* Events Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="w-full lg:w-1/3 group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500 mb-1">Watch Now</p>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
    
      </div>
    </section>
  );
}
