
import { useState } from "react";

import {
  ArrowRight,
  Search,
  Lightbulb,
  Scale,
  Telescope,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All Insights",
  "Research & Evidence",
  "Policy & Governance",
  "Innovation",
  "Futures & Foresight",
];

const articles = [
  {
    category: "Research & Evidence",
    type: "Research Perspective",
    date: "Coming Soon",
    read: "6 min read",
    title: "Africa's Youth Workforce in 2030: Preparing for a Changing Economy",
    description:
      "Exploring the opportunities, skills and structural challenges shaping the future of work for Africa's growing young population.",
    image: "/images/Pic5.png",
    featured: true,
  },
  {
    category: "Policy & Governance",
    type: "Policy Perspective",
    date: "Coming Soon",
    read: "5 min read",
    title: "Why Evidence Must Be at the Centre of Public Policy",
    description:
      "How research, community knowledge and data can contribute to more responsive policies and stronger institutions.",
    image: "/images/Pic2.png",
  },
  {
    category: "Innovation",
    type: "Innovation Insight",
    date: "Coming Soon",
    read: "4 min read",
    title: "From Youth Ideas to Solutions for African Challenges",
    description:
      "A closer look at human-centered design and how young innovators can develop solutions rooted in real community needs.",
    image: "/images/Pic3.png",
  },
  {
    category: "Futures & Foresight",
    type: "Futures Thinking",
    date: "Coming Soon",
    read: "7 min read",
    title: "Looking Towards Africa 2050: Four Questions We Should Be Asking",
    description:
      "Thinking beyond immediate challenges to explore the choices that could shape Africa's long-term future.",
    image: "/images/Pic4.png",
  },
  {
    category: "Research & Evidence",
    type: "Research Note",
    date: "Coming Soon",
    read: "5 min read",
    title: "Measuring What Matters: Moving Beyond Activity to Impact",
    description:
      "Why organizations need to understand outcomes, learn from evidence and measure the difference their programmes make.",
    image: "/images/Pic1.png",
  },
  {
    category: "Policy & Governance",
    type: "Policy Insight",
    date: "Coming Soon",
    read: "6 min read",
    title: "Young People as Contributors to Policy Innovation",
    description:
      "Exploring how young people can contribute research, practical ideas and perspectives to policy development.",
    image: "/images/Pic5.png",
  },
];

const focusAreas = [
  {
    icon: Search,
    title: "Research & Evidence",
    text: "Research findings, surveys, evidence reports and socio-economic analysis.",
  },
  {
    icon: Scale,
    title: "Policy & Governance",
    text: "Policy briefs, governance perspectives and institutional innovation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Human-centered design, entrepreneurship and practical solutions.",
  },
  {
    icon: Telescope,
    title: "Futures & Foresight",
    text: "Emerging trends, future scenarios and long-term African development.",
  },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredArticles =
    activeCategory === "All Insights"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <main className="afri-insights overflow-hidden bg-white text-[#10466B]">

      {/* HERO */}
      <section className="bg-[#F7F2E7] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-[1150px] items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.25em] text-[#0891A2]">
              AfriYouth Insights
            </p>

            <h1 className="afri-reveal afri-reveal-2 mt-5 text-4xl font-black leading-[1.12] md:text-6xl">
              Ideas that inform.
              <br />
              <span className="text-[#F47721]">Evidence that moves</span>
              <br />
              Africa forward.
            </h1>

            <p className="afri-reveal afri-reveal-3 mt-7 max-w-xl leading-8 text-gray-600 md:text-lg">
              Explore perspectives, research, policy ideas and emerging
              trends shaping Africa's development and the future of its
              people.
            </p>

            <a
              href="#latest-insights"
              className="afri-reveal afri-reveal-4 mt-8 inline-flex items-center gap-3 bg-[#10466B] px-7 py-4 font-bold text-white transition hover:bg-[#F47721]"
            >
              Explore Insights <ArrowRight size={18} />
            </a>
          </div>

          <div className="afri-image-reveal relative">
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l-4 border-t-4 border-[#F47721]" />

            <img
              src="/images/Bg2.png"
              alt="African young people sharing ideas and knowledge"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />

            <div className="afri-reveal afri-reveal-4 absolute -bottom-5 right-5 bg-[#10466B] px-6 py-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Our perspective
              </p>
              <p className="mt-1 text-xl font-black">
                Evidence. Innovation. Impact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-2 md:items-center">

          <div>
            <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Knowledge for Action
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-4xl">
              Understanding today's challenges. Exploring tomorrow's
              possibilities.
            </h2>
          </div>

          <p className="afri-reveal afri-reveal-3 leading-8 text-gray-600">
            AfriYouth Insights is a space for sharing knowledge generated
            through research, policy analysis, innovation and strategic
            foresight. We aim to make complex issues more understandable and
            connect evidence with conversations and decisions that matter.
          </p>

        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="bg-[#10466B] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1150px]">

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Featured Perspective
              </p>

              <h2 className="afri-reveal afri-reveal-2 mt-3 text-3xl font-black md:text-4xl">
                Thinking about Africa's future
              </h2>
            </div>

            <span className="afri-reveal afri-reveal-3 border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70">
              Futures & Foresight
            </span>
          </div>

          <div className="grid overflow-hidden bg-white text-[#10466B] md:grid-cols-2">

            <img
              src="/images/Pic5.png"
              alt="African youth and innovation"
              className="afri-image-reveal h-[280px] w-full object-cover md:h-full md:min-h-[370px]"
            />

            <div className="p-7 md:p-12">
              <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-widest text-[#0891A2]">
                A conversation about 2030 and beyond
              </p>

              <h3 className="afri-reveal afri-reveal-2 mt-5 text-2xl font-black leading-tight md:text-4xl">
                Africa's Youth Workforce in 2050: What Futures Are Possible?
              </h3>

              <p className="afri-reveal afri-reveal-3 mt-5 leading-7 text-gray-600">
                The decisions made today will influence the opportunities
                available to future generations. Strategic foresight helps us
                explore different possibilities, identify emerging trends
                and prepare for uncertainty.
              </p>

              <p className="afri-reveal afri-reveal-4 mt-5 text-xs font-semibold text-gray-400">
                Featured topic · Publication coming soon
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="latest-insights" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">

          <div className="mb-10">
            <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Explore Our Knowledge
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
              Latest Insights
            </h2>

            <p className="afri-reveal afri-reveal-3 mt-4 max-w-2xl leading-7 text-gray-600">
              Perspectives and research themes across the issues shaping
              Africa's development. New publications will be added as they
              become available.
            </p>
          </div>

          {/* FILTERS */}
          <div className="afri-reveal afri-reveal-4 mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-[#10466B] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#0891A2] hover:text-[#0891A2]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ARTICLE GRID */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <article
                key={article.title}
                style={{ animationDelay: `${0.1 + (index % 3) * 0.15}s` }}
                className="afri-reveal group flex flex-col border border-gray-100 bg-white transition hover:-translate-y-1 hover:border-[#0891A2]/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt=""
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#10466B] px-3 py-2 text-xs font-bold text-white">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span>{article.type}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-black leading-snug transition group-hover:text-[#F47721]">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {article.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock3 size={14} /> {article.read}
                    </span>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0891A2]">
                      Coming Soon <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* KNOWLEDGE AREAS */}
      <section className="bg-[#F7F2E7] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">

          <div className="mb-12 max-w-2xl">
            <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Our Knowledge Areas
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
              Exploring the issues that shape our future.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                  className="afri-reveal bg-white p-7 transition hover:-translate-y-1"
                >
                  <Icon size={29} className="text-[#0891A2]" />

                  <h3 className="mt-6 text-lg font-black">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {area.text}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="bg-[#10466B] px-6 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">

          <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Stay Connected
          </p>

          <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
            Be part of the conversation shaping Africa.
          </h2>

          <p className="afri-reveal afri-reveal-3 mt-6 leading-7 text-white/70">
            Interested in our research, policy work or innovation programmes?
            Connect with AfriYouth and follow the ideas informing our work.
          </p>

            <Link
              to="/reach-us"
              className="afri-button inline-flex items-center gap-3 bg-[#F47721] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full mt-8"
            >
              Connect With Us
              <ArrowRight size={19} />
            </Link>

        </div>
      </section>

    </main>
  );
};

export default Insights;
