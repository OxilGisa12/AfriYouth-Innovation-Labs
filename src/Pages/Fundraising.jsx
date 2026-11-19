
import {
  ArrowRight,
  Search,
  Target,
  BarChart3,
  Building2,
  Handshake,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  ["01", "Discover", "Identify the problem through community research."],
  ["02", "Diagnose", "Understand root causes through systems analysis."],
  ["03", "Research", "Generate and analyse reliable evidence."],
  ["04", "Design", "Develop a human-centered solution."],
  ["05", "Prototype", "Build, test and improve the proposed solution."],
  ["06", "Policy", "Develop policy recommendations and business cases."],
  ["07", "Finance", "Connect solutions with funders, investors and partners."],
  ["08", "Implement", "Pilot solutions in real-world settings."],
  ["09", "Measure", "Evaluate outcomes and understand impact."],
  ["10", "Scale", "Expand the approaches that demonstrate results."],
];

const services = [
  {
    icon: Search,
    title: "Grant Opportunity Intelligence",
    description:
      "Identify relevant funding opportunities and understand donor priorities, eligibility and application requirements.",
  },
  {
    icon: Target,
    title: "Grant Strategy",
    description:
      "Develop focused resource mobilization strategies that connect organizational priorities with suitable funding sources.",
  },
  {
    icon: Building2,
    title: "Donor & Partner Mapping",
    description:
      "Identify potential donors, investors, institutions and strategic partners aligned with your objectives.",
  },
  {
    icon: BarChart3,
    title: "Proposal & Business Case Development",
    description:
      "Translate ideas and evidence into compelling proposals, project concepts and investment cases.",
  },
  {
    icon: TrendingUp,
    title: "Investment Readiness",
    description:
      "Strengthen business models, financial projections, pitch materials and organizational readiness.",
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    description:
      "Build meaningful relationships and collaborations that support implementation and long-term sustainability.",
  },
];

const audiences = [
  {
    title: "Development Partners",
    description:
      "Collaborate with us to identify promising ideas, support evidence-based programmes and strengthen the impact of development investments.",
  },
  {
    title: "Foundations & Donors",
    description:
      "Support research, youth-led innovation and practical programmes addressing Africa's socio-economic challenges.",
  },
  {
    title: "Investors & Enterprises",
    description:
      "Connect with emerging solutions, innovation opportunities and ventures with potential for sustainable growth.",
  },
  {
    title: "Institutions & Organizations",
    description:
      "Work with us on research, policy, capacity development, programme evaluation and strategic initiatives.",
  },
];

const Fundraising = () => {
  return (
    <main className="afri-fundraising overflow-hidden bg-white text-[#10466B]">
      {/* HERO */}
      <section className="relative bg-[#10466B] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0891A2]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1150px] items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="afri-reveal text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Funding & Strategic Partnerships
            </p>

            <h1 className="afri-reveal afri-reveal-2 mt-5 text-4xl font-black leading-[1.12] md:text-6xl">
              Turning promising ideas into
              <span className="text-[#F47721]"> fundable impact.</span>
            </h1>

            <p className="afri-reveal afri-reveal-3 mt-7 max-w-xl leading-8 text-white/75">
              We connect evidence, innovation and resources to help promising
              solutions move from early ideas to practical implementation and
              sustainable impact across Africa.
            </p>

            <div className="afri-reveal afri-reveal-4 mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#F47721] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#10466B]"
              >
                Explore a Partnership <ArrowRight size={18} />
              </a>

              <a
                href="#accelerator"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Our Flagship Approach
              </a>
            </div>
          </div>

          <div className="afri-image-reveal relative">
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l-4 border-t-4 border-[#F47721]" />

            <div className="bg-white p-3">
              <img
                src="/images/Pic5.png"
                alt="Young African innovators collaborating on solutions"
                className="h-[300px] w-full object-cover md:h-[390px]"
              />
            </div>

            <div className="absolute -bottom-5 -right-4 bg-[#F7F2E7] p-5 text-[#10466B]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0891A2]">
                Our focus
              </p>
              <p className="mt-1 text-lg font-black">
                Resources into results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2">
          <div>
            <p className="afri-reveal text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Resource Mobilization
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black leading-tight md:text-5xl">
              Good ideas need the right support to grow.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-gray-600">
            <p className="afri-reveal afri-reveal-1">
              Research and innovation can identify powerful solutions, but
              turning those solutions into lasting impact requires the right
              resources, partnerships and implementation strategy.
            </p>

            <p className="afri-reveal afri-reveal-2">
              AfriYouth supports organizations, innovators and institutions
              to strengthen their funding readiness, develop compelling
              proposals and build partnerships that move meaningful work
              forward.
            </p>

            <p className="afri-reveal afri-reveal-3">
              Resource mobilization and partnerships are cross-cutting
              services that support our wider research, policy, innovation
              and capacity-building work.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F2E7] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="mb-12 max-w-3xl">
            <p className="afri-reveal text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              How We Support You
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
              Funding & Investment Readiness
            </h2>

            <p className="afri-reveal afri-reveal-3 mt-5 leading-7 text-gray-600">
              Practical support to help promising initiatives become better
              prepared to attract funding, investment and strategic
              collaboration.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              return (
                <article
                  key={service.title}
                  className={`afri-reveal afri-reveal-${Math.min(index + 1, 5)} border border-[#10466B]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#F47721]/50`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#F47721]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLAGSHIP PRODUCT */}
      <section id="accelerator" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1150px]">
          <div className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <div className="md:sticky md:top-24">
              <p className="afri-reveal text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
                Our Flagship Approach
              </p>

              <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black leading-tight md:text-5xl">
                Evidence-to-Impact
                <span className="text-[#F47721]"> Accelerator.</span>
              </h2>

              <p className="afri-reveal afri-reveal-3 mt-6 leading-8 text-gray-600">
                A connected pathway that brings community research,
                problem diagnosis, innovation, policy, financing and
                implementation into one process.
              </p>

              <p className="afri-reveal afri-reveal-4 mt-4 leading-8 text-gray-600">
                Rather than treating research, incubation and training as
                separate activities, this approach connects them around a
                shared goal: solutions that can be tested, measured and scaled.
              </p>

              <a
                href="/contact"
                className="afri-reveal afri-reveal-5 mt-8 inline-flex items-center gap-3 bg-[#10466B] px-7 py-4 font-bold text-white transition hover:bg-[#F47721]"
              >
                Discuss Collaboration <ArrowRight size={18} />
              </a>
            </div>

            <div className="border-l-2 border-[#0891A2]/30 pl-6 md:pl-9">
              {stages.map(([number, title, description], index) => (
                <div
                  key={number}
                  className={`afri-reveal afri-reveal-${Math.min(index + 1, 5)} relative pb-8 last:pb-0`}
                >
                  <span className="absolute -left-[34px] top-0 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-[#F47721] ring-1 ring-[#F47721] md:-left-[43px]" />

                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-sm font-black text-[#F47721]">
                      {number}
                    </span>
                    <h3 className="text-xl font-black">{title}</h3>
                  </div>

                  <p className="mt-2 max-w-lg text-sm leading-7 text-gray-600">
                    {description}
                  </p>

                  {index !== stages.length - 1 && (
                    <div className="mt-6 h-px max-w-lg bg-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="bg-[#F7F2E7] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="mb-12 max-w-2xl">
            <p className="afri-reveal text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Who We Work With
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
              Let's build impact together.
            </h2>

            <p className="afri-reveal afri-reveal-3 mt-5 leading-7 text-gray-600">
              We welcome collaboration with partners who share a commitment
              to evidence, innovation and inclusive development.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {audiences.map((item, index) => (
              <article
                key={item.title}
                className={`afri-reveal afri-reveal-${index + 1} flex gap-5 bg-white p-7`}
              >
                <span className="text-2xl font-black text-[#F47721]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#10466B] px-6 py-20 text-center text-white md:py-24">
        <HeartHandshake
          className="afri-reveal mx-auto mb-5 text-[#F47721]"
          size={38}
        />

        <div className="mx-auto max-w-3xl">
          <p className="afri-reveal afri-reveal-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Build With AfriYouth
          </p>

          <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
            The right partnership can move an idea further.
          </h2>

          <p className="afri-reveal afri-reveal-3 mt-6 leading-7 text-white/70">
            Whether you are a funder, investor, institution or development
            partner, let's explore how our work can contribute to meaningful
            and measurable change.
          </p>

            <Link
              to="/reach-us"
              className="afri-button inline-flex items-center gap-3 bg-[#F47721] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full mt-8"
            >
              Start A Conversation
              <ArrowRight size={19} />
            </Link>
        </div>
      </section>
    </main>
  );
};

export default Fundraising;
