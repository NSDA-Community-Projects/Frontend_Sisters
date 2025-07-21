import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, Code2, Handshake, Users } from "lucide-react";
import { Link } from "react-router-dom";
const features = [
  {
    title: "Sadaqah jariyah",
    icon: <BookOpen className="text-white w-5 h-5" />,
    description:
      "We build open-source tools as ongoing charity — connecting faith with tech, and offering lasting impact to the Ummah.",
  },
  {
    title: "Nujum Al-code",
    icon: <Code2 className="text-white w-5 h-5" />,
    description:
      "A bi-weekly spotlight on Muslim developers — sharing real-world tech insights, career tips, and faith-driven guidance.",
  },
  {
    title: "Mentorship",
    icon: <Handshake className="text-white w-5 h-5" />,
    description:
      "From fundamentals to advanced skills, we mentor aspiring Muslim students with consistent and faith-centered guidance.",
  },
  {
    title: "Muslim Devs",
    icon: <Users className="text-white w-5 h-5" />,
    description:
      "A nationwide network of Muslim developers — building together, supporting each other, and growing as one Ummah.",
  },
];

export default function FeaturesSection() {
  return (
  <section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#023665] mb-2">
      What We're Building
    </h2>
    <p className="text-gray-700 mb-10">
      Unlock a world of opportunities and accelerate your journey with us
    </p>

    {/* 🔽 Wrap all the cards in a bordered container */}
    <div className="border border-[#023665] rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <Card key={idx} className="bg-[#DFAD3B] rounded-xl text-left">
            <CardHeader className="p-4 pb-2">
              <div className="bg-[#023665] w-10 h-10 rounded-md flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-white text-lg font-semibold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 text-white text-sm">
              {feature.description}
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
              <Link
                to="/join"
                className="text-sm font-medium underline text-white hover:text-[#023665] transition-colors"
              >
                Join Now →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>

    <div className="mt-10">
      <Link to="/join">
        <button className="text-[#023665] px-8 py-3 rounded-full font-medium border border-[#023665] bg-transparent hover:bg-[#023665] hover:text-white transition-colors inline-flex items-center gap-2">
          Become part of Najm
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  </div>
</section>

  );
}
