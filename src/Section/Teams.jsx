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
      const containerWidth = containerRef.current?.clientWidth || 0;
      const cards = Math.floor(containerWidth / cardWidth);
      setVisibleCards(cards > 0 ? cards : 1);
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
    setCurrentIndex(newIndex);
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
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
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
    scrollTo(cardIndex);
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
    <section id="teams"
      aria-label="Islamic activity teams carousel"
      className="bg-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with yellow background */}
        <div className="bg-[#DFAD3B] rounded-xl p-8 mb-12">
          <h2 className="text-[#023665] text-3xl md:text-4xl font-bold mb-4 text-center">
            Join Our Islamic Activity Teams
          </h2>
          <p className="text-[#023665] max-w-3xl mx-auto text-center text-lg leading-relaxed">
            Participate in meaningful Islamic activities and contribute to the
            community. Select a team below to get involved and grow.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 text-black px-3 py-3 rounded-full font-medium border border-[#023665] bg-transparent hover:bg-[#023665] hover:text-white transition-colors inline-flex items-center gap-2 ${
              !canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={containerRef}
            role="list"
            className="flex gap-6 overflow-x-hidden px-2 py-4 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {teams.map((team) => {
              const isJoined = joinedTeams.has(team.id);
              const Icon = team.icon;
              return (
                <article
                  key={team.id}
                  role="listitem"
                  className="flex-shrink-0 w-[280px] bg-white rounded-2xl shadow-inner p-6 flex flex-col transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center mb-4">
                    <Icon className="w-10 h-10 text-[#DFAD3B] mb-2" />
                    <h3 className="text-[#DFAD3B] text-xl font-semibold text-center">
                      {team.name}
                    </h3>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {team.description.map((line, idx) => (
                      <li key={idx} className="text-[#023665]/90 text-sm leading-snug">
                        {line}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleJoin(team.id)}
                    className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DFAD3B] focus:ring-offset-2 ${
                      isJoined
                        ? "bg-[#DFAD3B] text-white flex items-center justify-center gap-2"
                        : "text-[#ffff] border bg-[#DFAD3B] hover:bg-[#ffff] hover:text-[#DFAD3B] inline-flex items-center justify-center gap-2"
                    }`}
                    aria-label={isJoined ? `${team.name} joined` : `Join ${team.name}`}
                  >
                    {isJoined ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Joined
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
            className={`absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 text-[#023665] px-3 py-3 rounded-full font-medium border border-[#023665] bg-transparent hover:bg-[#023665] hover:text-white transition-colors inline-flex items-center gap-2 ${
              !canScrollRight ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#023665] w-6' : 'bg-[#023665]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};