import { ArrowRight } from "lucide-react";

const ProgramPage = ({ program }) => {
  const {
    eyebrow,
    title,
    accent,
    intro,
    overviewTitle,
    overview,
    purpose,
    services,
    processTitle,
    processIntro,
    stages,
    outputsTitle,
    outputsIntro,
    outputs,
    audience,
    closingTitle,
    closingText,
    productLabel,
    productName,
    productDescription,
  } = program;

  return (
    <main className="afri-program-page overflow-hidden bg-white text-[#10466B]">
      {/* HERO */}
      <section className="relative bg-[#F7F2E7] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1150px] items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="afri-reveal afri-reveal-1 mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              {eyebrow}
            </p>
            <h1 className="afri-reveal afri-reveal-2 max-w-3xl text-4xl font-black leading-[1.12] md:text-6xl">
              {title}
              {accent && (
                <>
                  <br />
                  <span className="text-[#F47721]">{accent}</span>
                </>
              )}
            </h1>
            <p className="afri-reveal afri-reveal-3 mt-7 max-w-2xl text-base leading-8 text-gray-700 md:text-lg">
              {intro}
            </p>
            <div className="afri-reveal afri-reveal-4 mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#10466B] px-7 py-4 font-bold text-white transition-colors hover:bg-[#F47721]"
              >
                Discuss a Collaboration <ArrowRight size={17} />
              </a>
              <a
                href="#program-details"
                className="inline-flex items-center border border-[#10466B]/20 px-7 py-4 font-bold text-[#10466B] transition-colors hover:border-[#F47721] hover:text-[#F47721]"
              >
                Explore the Lab
              </a>
            </div>
          </div>

          <div className="afri-image-reveal">
            <div className="bg-[#10466B] p-3">
              <div className="flex min-h-[300px] flex-col justify-between bg-[#0D3C5C] p-7 text-white md:min-h-[390px] md:p-9">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    AfriYouth Innovation Labs
                  </p>
                  <p className="mt-8 max-w-sm text-3xl font-black leading-tight md:text-4xl">
                    Evidence, ideas and action for Africa's future.
                  </p>
                </div>
                <div className="border-t border-white/20 pt-5">
                  <p className="text-sm leading-7 text-white/75">
                    {purpose}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="program-details" className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="afri-reveal afri-reveal-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              The Work
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              {overviewTitle}
            </h2>
          </div>
          <div className="afri-reveal afri-reveal-2 space-y-5 text-base leading-8 text-gray-600">
            {overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F2E7] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="afri-reveal afri-reveal-1 mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Practical work. <span className="text-[#F47721]">Meaningful outcomes.</span>
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Our services are designed to move beyond discussion and support
              the development of evidence, capabilities and solutions that can
              be applied in real contexts.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service}
                className={`afri-reveal afri-reveal-${(index % 5) + 1} border border-[#10466B]/10 bg-white p-6`}
              >
                <span className="text-2xl font-black text-[#F47721]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="afri-reveal afri-reveal-1 mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              {processTitle}
            </h2>
            <p className="mt-5 leading-7 text-gray-600">{processIntro}</p>
          </div>

          <div className="grid gap-px border border-[#10466B]/10 bg-[#10466B]/10 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <article key={stage.title} className="afri-reveal bg-white p-6 md:p-7">
                <span className="text-2xl font-black text-[#F47721]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-black">{stage.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT / OUTPUTS */}
      <section className="bg-[#10466B] px-6 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="afri-reveal afri-reveal-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {productLabel || "Our Product"}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              {productName}
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              {productDescription}
            </p>
          </div>
          <div className="afri-reveal afri-reveal-2 border border-white/15 bg-white/[0.06] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              {outputsTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/65">{outputsIntro}</p>
            <ul className="mt-6 space-y-4">
              {outputs.map((output, index) => (
                <li key={output} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm font-black text-[#F47721]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-white/85">{output}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT SERVES */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 border-b border-[#10466B]/10 pb-12 md:flex-row md:items-start md:justify-between">
          <div className="afri-reveal max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Who We Work With
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Built around people and institutions.
            </h2>
          </div>
          <p className="afri-reveal max-w-xl leading-8 text-gray-600">
            {audience}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F2E7] px-6 py-20 text-center md:py-24">
        <div className="afri-reveal afri-reveal-1 mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
            Take the Next Step
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            {closingTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            {closingText}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#F47721] px-8 py-4 font-bold text-white transition-colors hover:bg-[#10466B]"
          >
            Connect With AfriYouth <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProgramPage;