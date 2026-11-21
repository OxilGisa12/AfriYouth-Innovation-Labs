
import {
  ArrowRight,
  BookOpen,
  Scale,
  Lightbulb,
  Telescope,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    title: "Research & Evidence",
    description:
      "We investigate Africa's emerging challenges and generate reliable evidence that helps communities, institutions and decision-makers understand what works.",
    items: ["Applied research", "Evidence reports", "Impact studies"],
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Policy & Governance",
    description:
      "We translate research into practical policy recommendations and support institutions to develop more responsive and effective solutions.",
    items: ["Policy analysis", "Governance diagnostics", "Policy innovation"],
    icon: Scale,
  },
  {
    number: "03",
    title: "Innovation & Entrepreneurship",
    description:
      "We help young innovators identify problems, design human-centered solutions, test ideas and develop ventures with the potential to grow.",
    items: ["Human-centered design", "Prototyping", "Incubation and acceleration"],
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Foresight & Futures",
    description:
      "We explore emerging trends, technologies and possible futures to help Africa prepare for tomorrow's opportunities and challenges.",
    items: ["Horizon scanning", "Scenario planning", "Africa 2050 futures"],
    icon: Telescope,
  },
  {
    number: "05",
    title: "Leadership & Capacity Building",
    description:
      "We equip young people and professionals with practical competencies to become effective leaders, problem-solvers and contributors to society.",
    items: ["Employability development", "Professional skills", "Leadership development"],
    icon: GraduationCap,
  },
];

const philosophy = [
  ["Think", "Question challenges and imagine new possibilities."],
  ["Research", "Generate evidence and understand what matters."],
  ["Design", "Develop human-centered ideas and solutions."],
  ["Build", "Turn promising ideas into practical action."],
  ["Influence", "Shape conversations, decisions and policies."],
  ["Scale", "Expand what works and create lasting change."],
];

const About = () => {
  return (
    <main className="afri-about overflow-hidden bg-white text-[#10466B]">

      {/* HERO */}

      <section className="relative bg-[#F7F2E7] px-6 py-24 md:py-32">
        <div className="relative mx-auto grid max-w-[1150px] items-center gap-14 md:grid-cols-2">

          <div>
            <p className="afri-reveal afri-reveal-1 mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#0891A2]">
              About AfriYouth Innovation Labs
            </p>

            <h1 className="afri-reveal afri-reveal-2 text-4xl font-black leading-[1.12] md:text-6xl">
              African ideas.
              <br />
              <span className="text-[#F47721]">Evidence.</span>
              <br />
              Lasting impact.
            </h1>

            <p className="afri-reveal afri-reveal-3 mt-7 max-w-xl text-base leading-8 text-gray-700 md:text-lg">
              We are a research, innovation and policy consulting firm that
              identifies, nurtures and advances promising ideas from Africa's
              young innovators to address the Sustainable Development Goals.
            </p>

            <p className="afri-reveal afri-reveal-4 mt-4 max-w-xl leading-7 text-gray-600">
              Through human-centered design, applied research and innovation,
              we transform community-driven ideas into practical and scalable
              solutions that contribute to the socio-economic transformation
              of Africa and beyond.
            </p>

            <div className="afri-reveal afri-reveal-5 mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#10466B] px-7 py-4 font-bold text-white transition hover:bg-[#F47721]"
              >
                Work With Us <ArrowRight size={18} />
              </a>

              <a
                href="#our-work"
                className="inline-flex items-center gap-2 rounded-full border border-[#10466B]/20 px-7 py-4 font-bold transition hover:border-[#F47721] hover:text-[#F47721]"
              >
                Explore Our Work
              </a>
            </div>
          </div>

          {/* CLEAN AFRIYOUTH BRAND SHOWCASE */}

          <div className="afri-image-reveal relative flex flex-col items-center justify-center text-center">

            <img
              src="/images/Logo.png"
              alt="AfriYouth Innovation Labs"
              className="h-auto w-[85%] max-w-[430px] object-contain"
            />


          </div>

        </div>
      </section>

      {/* THE CONTEXT */}

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-[0.8fr_1.2fr]">

          <div className="afri-reveal afri-reveal-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Why We Exist
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Africa's future is a responsibility we share.
            </h2>
          </div>

          <div className="afri-reveal afri-reveal-2 space-y-5 text-base leading-8 text-gray-600">
            <p>
              By 2030, Africa is expected to have the world's largest
              workforce. This growing generation represents an extraordinary
              opportunity to shape the continent's future.
            </p>

            <p>
              But opportunity alone is not enough. Young people need the
              knowledge, tools, evidence and opportunities to understand
              challenges and develop solutions that respond to the realities
              of their communities.
            </p>

            <p>
              AfriYouth exists to help build that capacity. We connect young
              innovators with research, policy, entrepreneurship and practical
              experience so that they can move beyond identifying problems
              towards creating solutions.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}

      <section className="bg-[#10466B] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1100px]">

          <div className="afri-reveal afri-reveal-1 mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Purpose that guides our work.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <article className="afri-reveal afri-reveal-2 border border-white/15 bg-white/[0.06] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Our Mission
              </p>

              <h3 className="mt-3 text-2xl font-black">What we do</h3>

              <p className="mt-5 leading-8 text-white/75">
                To empower Africa's youth to generate evidence, shape policy
                and develop innovative solutions to Africa's most pressing
                socio-economic challenges through research, human-centered
                design and entrepreneurship.
              </p>
            </article>

            <article className="afri-reveal afri-reveal-3 border border-white/15 bg-white/[0.06] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-black">Where we are going</h3>

              <p className="mt-5 leading-8 text-white/75">
                To build an Africa where empowered young people use evidence,
                innovation and entrepreneurship to solve complex challenges,
                shape policies and drive inclusive and sustainable
                socio-economic transformation by 2050.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* OUR CAPABILITIES */}

      <section id="our-work" className="bg-[#F7F2E7] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">

          <div className="afri-reveal afri-reveal-1 mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              What We Bring Together
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Five capabilities.
              <span className="text-[#F47721]"> One connected mission.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-600">
              Our work connects knowledge, innovation and action. Each
              capability contributes to a stronger ecosystem for African
              problem-solvers.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`afri-reveal afri-reveal-${index + 1} group border border-[#10466B]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#F47721]/50`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#F47721]">
                      {item.number}
                    </span>

                    <Icon size={27} className="text-[#0891A2]" />
                  </div>

                  <h3 className="mt-7 text-xl font-black">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-gray-100 pt-5">
                    {item.items.map((entry) => (
                      <li
                        key={entry}
                        className="flex gap-2 text-sm text-gray-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F47721]" />
                        {entry}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR DIFFERENCE */}

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div className="afri-reveal afri-reveal-1">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
                The AfriYouth Difference
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                We connect what others often keep separate.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Many youth organizations focus on training. Incubators focus
                on startups. Think tanks focus on research and policy.
                Consulting firms focus on client challenges.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                AfriYouth brings these approaches together, connecting
                research, policy, human-centered design, entrepreneurship and
                foresight to help move ideas from evidence to impact.
              </p>
            </div>

            <div className="afri-reveal afri-reveal-3 bg-[#10466B] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Our integrated approach
              </p>

              <div className="mt-7 space-y-5">
                {[
                  ["Research", "Understand the challenge."],
                  ["Policy", "Inform decisions and institutions."],
                  ["Design", "Create solutions around people."],
                  ["Entrepreneurship", "Build and test what works."],
                  ["Foresight", "Prepare for what comes next."],
                ].map(([title, description], index) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-sm font-black text-[#F47721]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm text-white/60">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="bg-[#F7F2E7] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">

          <div className="afri-reveal afri-reveal-1 mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              How We Create Change
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              The AfriYouth Philosophy
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Meaningful transformation takes more than an idea. It takes a
              process that moves from understanding to action and impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {philosophy.map(([title, description], index) => (
              <div
                key={title}
                className={`afri-reveal afri-reveal-${index + 1} bg-white p-5 text-center`}
              >
                <span className="text-2xl font-black text-[#F47721]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-lg font-black">{title}</h3>

                <p className="mt-2 text-xs leading-6 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}

      <section className="bg-[#10466B] px-6 py-20 text-center text-white md:py-24">
        <div className="afri-reveal afri-reveal-1 mx-auto max-w-3xl">

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Our Commitment
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            From evidence to impact.
            <span className="text-[#F47721]"> From ideas to transformation.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
            We are building an ecosystem where young Africans can investigate
            challenges, design solutions and influence the future of the
            continent.
          </p>

            <Link
              to="/reach-us"
              className="afri-button inline-flex items-center gap-3 bg-[#F47721] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full mt-8"
            >
              Be Part of the Change
              <ArrowRight size={19} />
            </Link>

        </div>
      </section>

    </main>
  );
};

export default About;
