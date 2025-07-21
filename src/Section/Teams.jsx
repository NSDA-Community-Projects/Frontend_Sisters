
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, HandHeart, HeartPulse, Landmark, Leaf, Mic2, Trophy, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const teams = [
  {
    id: 1,
    name: "Quranic Studies Team",
    description: [
      "Focus: Deepening Quran understanding and recitation skills.",
      "Activities: Weekly study sessions, community classes.",
      "Goal: Inspire spiritual growth through the Quran.",
    ],
    icon: BookOpen,
  },
  {
    id: 2,
    name: "Community Service Team",
    description: [
      "Focus: Social welfare & outreach programs.",
      "Activities: Food drives, charity events, support for families.",
      "Goal: Serve and uplift our local community.",
    ],
    icon: HandHeart,
  },
  {
    id: 3,
    name: "Islamic Art & Culture Team",
    description: [
      "Focus: Preserving and celebrating Islamic heritage.",
      "Activities: Art exhibitions, cultural workshops.",
      "Goal: Promote awareness and appreciation of Islamic culture.",
    ],
    icon: Landmark,
  },
  {
    id: 4,
    name: "Youth Empowerment Team",
    description: [
      "Focus: Leadership and skills development for youth.",
      "Activities: Mentorship, training programs, talks.",
      "Goal: Build confident, knowledgeable future leaders.",
    ],
    icon: Users,
  },
  {
    id: 5,
    name: "Interfaith Dialogue Team",
    description: [
      "Focus: Promoting understanding between faiths.",
      "Activities: Panel discussions, community outreach.",
      "Goal: Foster peace and mutual respect.",
    ],
    icon: Mic2,
  },
  {
    id: 6,
    name: "Health & Wellness Team",
    description: [
      "Focus: Supporting physical and mental wellbeing.",
      "Activities: Wellness workshops, counseling sessions.",
      "Goal: Encourage healthy lifestyles in the community.",
    ],
    icon: HeartPulse,
  },
  {
    id: 7,
    name: "Environmental Stewardship Team",
    description: [
      "Focus: Caring for the earth through Islamic teachings.",
      "Activities: Clean-up events, sustainability projects.",
      "Goal: Promote eco-consciousness among members.",
    ],
    icon: Leaf,
  },
  {
    id: 8,
    name: "Youth Sports & Recreation Team",
    description: [
      "Focus: Encouraging physical activity and teamwork.",
      "Activities: Sports tournaments, fitness challenges.",
      "Goal: Build camaraderie and health awareness.",
    ],
    icon: Trophy,
  },
];

export const Teams = () => {
  const [joinedTeams, setJoinedTeams] = useState(new Set());
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Calculate visible cards and total pages
  const cardWidth = 280 + 24; // card width + gap
  const [visibleCards, setVisibleCards] = useState(3);
  const totalPages = Math.ceil(teams.length / visibleCards);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const cards = Math.max(1, Math.floor(containerWidth / cardWidth));
      setVisibleCards(cards);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    
    // Update current index based on scroll position
    const scrollPos = el.scrollLeft;
    const newIndex = Math.round(scrollPos / (cardWidth * visibleCards));
    setCurrentIndex(Math.min(newIndex, totalPages - 1));
  };

  const scrollTo = (index) => {
    const el = containerRef.current;
    if (!el) return;

    const scrollAmount = index * (cardWidth * visibleCards);
    el.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  };

  const scrollBy = (direction) => {
    const el = containerRef.current;
    if (!el) return;

    const scrollAmount = cardWidth * visibleCards;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  // Touch/mouse swipe handlers
  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest card
    const el = containerRef.current;
    if (!el) return;
    
    const scrollPos = el.scrollLeft;
    const cardIndex = Math.round(scrollPos / (cardWidth * visibleCards));
    scrollTo(Math.min(cardIndex, totalPages - 1));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    el.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    
    return () => el.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  const handleJoin = (teamId) => {
    setJoinedTeams((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(teamId)) {
        newSet.delete(teamId);
      } else {
        newSet.add(teamId);
      }
      return newSet;
    });
  };

  return (
    <section
      aria-label="Islamic activity teams carousel"
      className="bg-white py-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Header with yellow background */}
        <div className="bg-[#DFAD3B] rounded-xl p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="text-[#023665] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-center">
            Join Our Islamic Activity Teams
          </h2>
          <p className="text-[#023665] max-w-3xl mx-auto text-center text-base md:text-lg leading-relaxed">
            Participate in meaningful Islamic activities and contribute to the
            community. Select a team below to get involved and grow.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative px-8 md:px-12">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-black px-2 py-2 md:px-3 md:py-3 rounded-full font-medium border border-[#023665] bg-white hover:bg-[#023665] hover:text-white transition-colors inline-flex items-center justify-center ${
              !canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={containerRef}
            role="list"
            className="flex gap-6 overflow-x-auto scrollbar-hide px-1 py-4 select-none snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollPadding: '0 24px'
            }}
          >
            {teams.map((team) => {
              const isJoined = joinedTeams.has(team.id);
              const Icon = team.icon;
              return (
                <article
                  key={team.id}
                  role="listitem"
                  className="flex-shrink-0 w-[260px] sm:w-[280px] bg-white rounded-2xl shadow-sm p-5 md:p-6 flex flex-col transition-all duration-300 hover:shadow-md snap-start"
                >
                  <div className="flex flex-col items-center mb-3 md:mb-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#DFAD3B] mb-2" />
                    <h3 className="text-[#DFAD3B] text-lg md:text-xl font-semibold text-center">
                      {team.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 md:space-y-3 flex-grow">
                    {team.description.map((line, idx) => (
                      <li key={idx} className="text-[#023665]/90 text-xs md:text-sm leading-snug">
                        {line}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleJoin(team.id)}
                    className={`mt-4 md:mt-6 w-full py-2 md:py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DFAD3B] focus:ring-offset-2 ${
                      isJoined
                        ? "bg-[#DFAD3B] text-white flex items-center justify-center gap-1 md:gap-2"
                        : "text-white border bg-[#DFAD3B] hover:bg-white hover:text-[#DFAD3B] inline-flex items-center justify-center gap-1 md:gap-2"
                    }`}
                    aria-label={isJoined ? `${team.name} joined` : `Join ${team.name}`}
                  >
                    {isJoined ? (
                      <>
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Joined</span>
                      </>
                    ) : (
                      "Join Now"
                    )}
                  </button>
                </article>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#023665] px-2 py-2 md:px-3 md:py-3 rounded-full font-medium border border-[#023665] bg-white hover:bg-[#023665] hover:text-white transition-colors inline-flex items-center justify-center ${
              !canScrollRight ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105"
            }`}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#023665] w-4 md:w-6' : 'bg-[#023665]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};