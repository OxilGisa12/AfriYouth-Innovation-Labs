import {
  Star,
  Zap,
  Heart,
  Plus,
  ArrowRight,
  Laptop,
  Lightbulb,
  Rocket,
  BookOpen,
  Scale,
  Telescope,
  GraduationCap,
  BarChart3,
  Search,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const photoCards = [
    {
      image: "/images/Pic2.png",
      caption: "YOUR IDEAS",
      rotation: "-rotate-3",
      clip: "bg-orange-500 dark:bg-[#C723DF]",
    },
    {
      image: "/images/Pic3.png",
      caption: "YOUR SKILLS",
      rotation: "rotate-2",
      clip: "bg-lime-500",
    },
    {
      image: "/images/Pic4.png",
      caption: "YOUR GOALS",
      rotation: "-rotate-2",
      clip: "bg-cyan-600",
    },
    {
      image: "/images/Pic1.png",
      caption: "YOUR FUTURE",
      rotation: "rotate-3",
      clip: "bg-blue-600",
    },
  ];

  const impactStats = [
    { number: "5M+", label: "Youth Across Africa" },
    { number: "2.5M+", label: "Young People" },
    { number: "30+", label: "Countries Reached" },
    { number: "6", label: "Areas of Impact" },
  ];

  const portfolio = [
    {
      number: "01",
      title: "Research & Evidence",
      description:
        "Turning data and real-world experiences into evidence that informs decisions and drives meaningful change.",
      programs: ["Evidence Reports", "Surveys", "Impact Studies"],
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Policy & Governance",
      description:
        "Connecting research with policy innovation to help shape responsive institutions and better governance.",
      programs: ["Policy Lab", "Policy Papers", "Policy Innovation Challenges"],
      icon: Scale,
    },
    {
      number: "03",
      title: "Innovation & Entrepreneurship",
      description:
        "Helping young innovators turn promising ideas into practical solutions, ventures and opportunities.",
      programs: [
        "Innovation Accelerator",
        "Human-Centered Design Lab",
      ],
      icon: Lightbulb,
    },
    {
      number: "04",
      title: "Foresight & Futures",
      description:
        "Exploring emerging trends and future possibilities to prepare Africa for the challenges ahead.",
      programs: ["Africa 2030/2050 Scenarios", "Futures Studies"],
      icon: Telescope,
    },
    {
      number: "05",
      title: "Leadership & Capacity Building",
      description:
        "Equipping young people and professionals with the knowledge, confidence and skills to lead change.",
      programs: [
        "Employability Skills Lab",
        "Professional Skills Academy",
      ],
      icon: GraduationCap,
    },
    {
      number: "06",
      title: "Impact & Learning Services",
      description:
        "Measuring progress, capturing lessons and helping organizations strengthen the impact of their work.",
      programs: [
        "Impact Assessment",
        "Monitoring & Evaluation",
        "Learning Services",
      ],
      icon: BarChart3,
    },
  ];

  const uniqueness = [
    {
      title: "Research & Think Tanks",
      description:
        "We generate evidence, investigate challenges and turn knowledge into practical insights.",
    },
    {
      title: "Youth Development",
      description:
        "We equip young Africans with the skills, confidence and capacity to shape their future.",
    },
    {
      title: "Innovation & Incubation",
      description:
        "We help transform ideas into human-centered solutions, enterprises and opportunities.",
    },
    {
      title: "Policy & Consulting",
      description:
        "We connect ideas and evidence to policy, institutions and decisions that create lasting change.",
    },
  ];

  const philosophy = [
    {
      title: "Think",
      description: "Question challenges and imagine new possibilities.",
      icon: Lightbulb,
    },
    {
      title: "Research",
      description: "Generate evidence and understand what matters.",
      icon: Search,
    },
    {
      title: "Design",
      description: "Develop human-centered ideas and solutions.",
      icon: Star,
    },
    {
      title: "Build",
      description: "Turn promising ideas into practical action.",
      icon: Rocket,
    },
    {
      title: "Influence",
      description: "Shape conversations, decisions and policies.",
      icon: TrendingUp,
    },
    {
      title: "Scale",
      description: "Expand impact and create lasting change.",
      icon: Globe,
    },
  ];

  return (
    <section
      id="afriyouth-home"
      className="
        afri-hero relative overflow-hidden font-['Gilroy']
        [&_h1]:font-['Poppins']
        [&_h2]:font-['Poppins']
        [&_h3]:font-['Poppins']
      "
    >
      {/* =========================================
          1. HERO SECTION
      ========================================= */}

      <div
        className="relative min-h-[620px] sm:min-h-[680px] bg-cover bg-center bg-no-repeat px-4 sm:px-5 pt-7 sm:pt-10 pb-8 sm:pb-10"
        style={{
          backgroundImage: "url('/images/Bg2.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#10466B]/10" />

        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          {/* MAIN HERO CARD */}

          <div className="afri-reveal afri-reveal-2 relative w-full bg-[#F7F2E7] rounded-[28px] sm:rounded-[40px] min-h-[560px] sm:min-h-[580px] px-5 sm:px-8 md:px-14 pt-14 sm:pt-14 pb-10 text-center shadow-xl">
            {/* DECORATIVE ELEMENTS */}

            <Star
              size={21}
              className="absolute top-6 left-5 sm:top-12 sm:left-10 sm:w-[27px] sm:h-[27px] text-cyan-600 fill-cyan-600"
            />

            <Zap
              size={30}
              className="absolute top-5 right-5 sm:top-8 sm:right-12 sm:w-[42px] sm:h-[42px] text-blue-600"
            />

            <Heart
              size={34}
              className="absolute bottom-20 left-10 text-orange-500 dark:text-[#C723DF] hidden sm:block"
            />

            <Plus
              size={35}
              className="absolute bottom-20 right-12 text-orange-500 dark:text-[#C723DF] hidden sm:block"
              strokeWidth={3}
            />

            {/* HERO CONTENT */}

            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="afri-reveal afri-reveal-1 text-[#0891A2] font-bold tracking-[0.12em] sm:tracking-widest text-[10px] sm:text-xs md:text-sm mb-5 leading-relaxed">
                AFRICA'S NEXT GENERATION OF INNOVATORS
              </p>

              <h1 className="afri-reveal afri-reveal-2 text-3xl sm:text-5xl md:text-6xl font-black text-[#F47721] dark:text-[#C723DF] leading-[1.12] uppercase">
                From Evidence
                <br />
                to Impact
              </h1>

              <h2 className="afri-reveal afri-reveal-3 text-base sm:text-lg md:text-xl font-bold text-[#10466B] mt-4">
                Research. Design. Innovate. Transform.
              </h2>

              <p className="afri-reveal afri-reveal-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-5 max-w-2xl mx-auto px-1 sm:px-0">
                AfriYouth advances youth-led research, human-centered
                innovation and policy solutions for Africa's most pressing
                socio-economic challenges.
              </p>

              {/* CTA */}

              <div className="afri-reveal afri-reveal-5 mt-7 sm:mt-8 flex justify-center">
                <a
                  href="#programs"
                  className="afri-button group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#10466B] hover:bg-[#F47721] dark:hover:bg-[#C723DF] text-white text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg"
                >
                  Explore AfriYouth
                  <ArrowRight
                    size={19}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* FEATURE LABELS */}

              <div className="afri-reveal afri-reveal-5 flex flex-wrap justify-center items-center gap-x-5 gap-y-3 sm:gap-x-9 mt-8 text-gray-600 text-xs sm:text-sm">
                <span className="flex items-center gap-2">
                  <Laptop size={17} className="text-orange-500 dark:text-[#C723DF] shrink-0" />
                  From Research
                </span>

                <span className="flex items-center gap-2">
                  <Lightbulb size={17} className="text-orange-500 dark:text-[#C723DF] shrink-0" />
                  to Prototype
                </span>

                <span className="flex items-center gap-2">
                  <Rocket size={17} className="text-orange-500 dark:text-[#C723DF] shrink-0" />
                  to Policy
                </span>
              </div>
            </div>

            {/* DESKTOP PHOTO CARDS */}

            <div className="afri-image-reveal absolute -bottom-[200px] left-0 right-0 px-8 hidden md:grid grid-cols-4 gap-12 z-30">
              {photoCards.map((card) => (
                <div
                  key={card.caption}
                  className={`afri-photo-card afri-hover-lift relative ${card.rotation} bg-white p-2.5 pb-4 shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300`}
                >
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-5 ${card.clip} rounded-sm shadow-sm z-30`}
                  />

                  <img
                    src={card.image}
                    alt={card.caption}
                    className="w-full h-44 object-cover"
                  />

                  <p className="text-[#10466B] font-black text-center mt-3 text-sm tracking-wide">
                    {card.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. OUR IMPACT
      ========================================= */}

      <div className="relative bg-[#10466B] px-6 pt-44 pb-24 overflow-hidden">
        <div className="max-w-[1150px] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="afri-reveal afri-reveal-1 text-white">
              <p className="text-cyan-400 font-bold tracking-[0.25em] text-xs md:text-sm uppercase">
                By the Numbers
              </p>

              <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
                Millions of young people.
                <span className="text-[#F47721] dark:text-[#C723DF]"> One mission.</span>
              </h2>

              <p className="text-white/70 mt-5 leading-relaxed max-w-lg">
                Empowering young Africans to become creators,
                innovators and changemakers. We believe in the
                potential of Africa's youth and the power they
                hold to shape a better future.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-12">
                {impactStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`afri-reveal afri-reveal-${Math.min(index + 2, 5)}`}
                  >
                    <h3 className="text-4xl md:text-5xl font-black text-[#F47721] dark:text-[#C723DF]">
                      {stat.number}
                    </h3>

                    <p className="text-white/75 text-sm md:text-base mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm mt-10">
                Building the next generation of African problem-solvers.
              </p>
            </div>

            <div className="afri-image-reveal relative mt-6 md:mt-0 max-w-[420px] mx-auto w-full">
              <div className="absolute -top-5 -right-5 w-20 h-20 border-t-4 border-r-4 border-[#F47721] dark:border-[#C723DF] rounded-tr-3xl" />

              <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-4 border-l-4 border-cyan-400 rounded-bl-3xl" />

              <div className="relative bg-[#F7F2E7] p-3 md:p-4 rounded-sm">
                <img
                  src="/images/Pic5.png"
                  alt="AfriYouth young people creating a brighter future"
                  className="w-full h-[300px] md:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          3. THE AFRICA 2030 STORY
      ========================================= */}

      <div className="bg-[#F7F2E7] px-6 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="afri-reveal afri-reveal-1">
              <p className="text-[#0891A2] font-bold tracking-[0.2em] text-xs uppercase">
                A Story. A Purpose. A Future.
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-[#10466B] mt-4 leading-tight">
                Africa's Future
                <br />
                <span className="text-[#F47721] dark:text-[#C723DF]">
                  Starts With Its Youth.
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mt-6">
                By 2030, Africa will have the largest workforce
                in the world. This presents an extraordinary
                opportunity, but also a responsibility.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                We must equip young Africans with the knowledge,
                skills and capacity to understand challenges,
                shape decisions and create solutions that respond
                to the realities of their communities.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                At AfriYouth, we believe young people should not
                simply inherit Africa's future. They should have
                the power to design it, influence it and lead it.
                Our goal is to build a generation capable of
                driving independence, opportunity and
                self-reliance across the continent.
              </p>

              <a
                href="#mission"
                className="afri-button inline-flex items-center gap-2 mt-7 text-[#0891A2] font-bold hover:text-[#F47721] dark:hover:text-[#C723DF]"
              >
                Discover Our Purpose
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="afri-image-reveal relative">
              <div className="bg-[#10466B] rounded-2xl p-3 rotate-1">
                <div className="h-[300px] md:h-[390px] bg-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/Bg2.png"
                    alt="Young African innovators working together"
                    className="h-[330px] w-full object-cover md:h-[440px]"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-[#F47721] dark:bg-[#C723DF] text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-2xl font-black">2030+</p>
                <p className="text-xs font-bold">
                  Shaping Africa's Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          4. OUR MISSION & VISION
      ========================================= */}

      <div id="mission" className="bg-white px-6 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="afri-reveal afri-reveal-1 text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#0891A2] font-bold tracking-[0.2em] text-xs uppercase">
              What Drives Us
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-[#10466B] mt-3">
              Our Mission & Vision
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Our purpose is rooted in a simple belief:
              empowered young people can transform Africa.
              Everything we do moves us closer to that future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="afri-reveal afri-reveal-2 afri-hover-lift bg-[#F7F2E7] p-8 md:p-10 rounded-2xl border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-black text-[#10466B] mb-5">
                Our Mission
              </h3>

              <p className="text-gray-700 leading-relaxed">
                To empower Africa's youth to generate evidence,
                shape policy and develop innovative solutions
                to the continent's most pressing socio-economic
                challenges through research, human-centered
                design and entrepreneurship.
              </p>
            </div>

            <div className="afri-reveal afri-reveal-3 afri-hover-lift bg-[#10466B] p-8 md:p-10 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-5">
                Our Vision
              </h3>

              <p className="text-white/75 leading-relaxed">
                To build an Africa where empowered young
                people use evidence, innovation and
                entrepreneurship to solve complex challenges,
                shape policies and drive inclusive and
                sustainable socio-economic transformation
                by 2050.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          5. OUR POTENTIAL PRODUCT PORTFOLIO
      ========================================= */}

      <div id="programs" className="bg-[#10466B] px-6 py-20 md:py-24">
        <div className="max-w-[1150px] mx-auto">
          <div className="afri-reveal afri-reveal-1 max-w-2xl mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3">
              Our
              <span className="text-[#F47721] dark:text-[#C723DF]">
                {" "}Strategic Divisions
              </span>
            </h2>

            <p className="text-white/70 mt-5 leading-relaxed">
              Research, policy, innovation and foresight come together
              through practical programmes that equip young people,
              institutions and partners to advance solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {portfolio.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`afri-reveal afri-reveal-${Math.min(index + 1, 5)} afri-hover-lift bg-[#F7F2E7] rounded-2xl overflow-hidden`}
                >
                  <div className="h-[175px] bg-white/70 relative overflow-hidden flex items-center justify-center">
                    <div className="text-[#10466B]/40 text-center">
                      <Icon size={45} className="mx-auto mb-2" />
                    </div>

                    <span className="absolute top-4 left-4 bg-[#10466B] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {item.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#10466B] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-gray-200">
                      <p className="text-[#0891A2] text-xs uppercase font-bold tracking-wider mb-3">
                        Key Programs
                      </p>

                      <ul className="space-y-2">
                        {item.programs.map((program) => (
                          <li
                            key={program}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721] dark:bg-[#C723DF] mt-1.5 shrink-0" />
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="afri-reveal afri-reveal-5 text-center mt-12">
            <a
              href="/programs"
              className="afri-button inline-flex items-center gap-3 bg-[#F47721] dark:bg-[#C723DF] hover:bg-orange-600 dark:hover:bg-[#A91CC0] text-white font-bold px-8 py-4 rounded-full"
            >
              Explore More Programs
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          6. WHAT MAKES AFRIYOUTH UNIQUE?
      ========================================= */}

      <div className="bg-[#F7F2E7] px-6 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="afri-reveal afri-reveal-1 text-center max-w-3xl mx-auto mb-14">
            <p className="text-[#0891A2] font-bold tracking-[0.2em] text-xs uppercase">
              Beyond Traditional Approaches
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-[#10466B] mt-3">
              What Makes AfriYouth
              <span className="text-[#F47721] dark:text-[#C723DF]">
                {" "}Unique?
              </span>
            </h2>

            <p className="text-gray-700 mt-5 leading-relaxed">
              Africa's challenges are interconnected.
              Addressing them requires more than isolated
              solutions. It requires bringing knowledge,
              innovation, people and policy together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="afri-reveal afri-reveal-2 afri-hover-lift bg-white p-7 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-black text-[#10466B] mb-4">
                Traditionally, different organizations focus on:
              </h3>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex items-center gap-3">
                  <BookOpen className="text-cyan-600 shrink-0" size={20} />
                  Youth organizations focus on training.
                </li>

                <li className="flex items-center gap-3">
                  <Rocket className="text-orange-500 dark:text-[#C723DF] shrink-0" size={20} />
                  Incubators focus on startups.
                </li>

                <li className="flex items-center gap-3">
                  <Search className="text-cyan-600 shrink-0" size={20} />
                  Think tanks focus on research and policy.
                </li>

                <li className="flex items-center gap-3">
                  <Globe className="text-orange-500 dark:text-[#C723DF] shrink-0" size={20} />
                  Consulting firms focus on clients.
                </li>
              </ul>
            </div>

            <div className="afri-reveal afri-reveal-3 afri-hover-lift bg-[#10466B] p-7 rounded-2xl text-white flex flex-col justify-center">
              <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                The AfriYouth Difference
              </p>

              <h3 className="text-2xl md:text-3xl font-black mt-4 leading-tight">
                We bring all four
                <span className="text-[#F47721] dark:text-[#C723DF]">
                  {" "}together.
                </span>
              </h3>

              <p className="text-white/75 text-sm leading-relaxed mt-4">
                AfriYouth connects research, youth development,
                innovation and policy to create an ecosystem
                where ideas become evidence, solutions become
                action and impact reaches beyond individuals
                and communities.
              </p>

              <div className="mt-6 flex items-center gap-2 text-cyan-400 font-bold text-sm">
                One connected ecosystem
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {uniqueness.map((item, index) => (
              <div
                key={item.title}
                className={`afri-reveal afri-reveal-${index + 1} afri-hover-lift bg-white rounded-xl p-6 border border-gray-100`}
              >
                <div className="text-center mb-6">
                  <span className="text-4xl font-black text-[#F47721] dark:text-[#C723DF]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-black text-[#10466B] text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          7. THE AFRIYOUTH PHILOSOPHY
      ========================================= */}

      <div className="bg-white px-6 py-20 md:py-24">
        <div className="max-w-[1150px] mx-auto">
          <div className="afri-reveal afri-reveal-1 text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#0891A2] font-bold tracking-[0.2em] text-xs uppercase">
              How We Create Change
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-[#10466B] mt-3">
              The AfriYouth
              <span className="text-[#F47721] dark:text-[#C723DF]">
                {" "}Philosophy
              </span>
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              We believe meaningful transformation is a
              continuous journey. Every challenge is an
              opportunity to think differently, discover
              evidence and create solutions that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`afri-reveal afri-reveal-${Math.min(index + 1, 5)} afri-hover-lift relative text-center p-5 rounded-xl bg-[#F7F2E7]`}
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                    <Icon
                      size={25}
                      className="text-[#0891A2]"
                    />
                  </div>

                  <span className="text-xs font-bold text-[#F47721] dark:text-[#C723DF]">
                    STEP 0{index + 1}
                  </span>

                  <h3 className="text-lg font-black text-[#10466B] mt-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* FINAL PHILOSOPHY STATEMENT */}

          <div className="afri-reveal afri-reveal-2 mt-14 bg-[#10466B] rounded-2xl px-7 py-10 md:px-12 text-center">
            <p className="text-cyan-400 font-bold text-xs tracking-[0.2em] uppercase">
              Our Commitment
            </p>

            <h3 className="text-2xl md:text-4xl font-black text-white mt-4 leading-tight">
              We don't just prepare young people
              <br className="hidden md:block" />
              for the future.
              <span className="text-[#F47721] dark:text-[#C723DF]">
                {" "}We empower them to create it.
              </span>
            </h3>

            <p className="text-white/65 text-sm mt-5 max-w-2xl mx-auto leading-relaxed">
              Together, we can turn African potential into
              evidence, ideas into action and innovation
              into lasting impact.
            </p>

            <Link
              to="/reach-us"
              className="afri-button inline-flex items-center gap-3 bg-[#F47721] dark:bg-[#C723DF] hover:bg-orange-600 dark:hover:bg-[#A91CC0] text-white font-bold px-8 py-4 rounded-full mt-8"
            >
              Be Part of the Change
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE PHOTO CARDS
      ========================================= */}

      <div className="relative z-20 grid grid-cols-2 gap-5 px-5 py-10 md:hidden bg-[#10466B]">
        {photoCards.map((card) => (
          <div
            key={card.caption}
            className={`afri-photo-card afri-image-reveal afri-hover-lift relative ${card.rotation} bg-white p-2 pb-3 shadow-lg`}
          >
            <div
              className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-6 ${card.clip} rounded-sm`}
            />

            <img
              src={card.image}
              alt={card.caption}
              className="w-full h-32 object-cover"
            />

            <p className="text-[#10466B] font-bold text-center mt-2 text-xs">
              {card.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;