
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Handshake,
  BookOpen,
  Lightbulb,
  Send,
} from "lucide-react";

const inquiryTypes = [
  "General inquiry",
  "Research & policy collaboration",
  "Funding & partnerships",
  "Innovation programmes",
  "Career & professional development",
  "Media & speaking request",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "General inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="afri-contact overflow-hidden bg-white text-[#10466B]">
      {/* HERO */}
      <section className="bg-[#F7F2E7] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="afri-reveal text-xs font-bold uppercase tracking-[0.25em] text-[#0891A2]">
            Contact AfriYouth
          </p>

          <h1 className="afri-reveal afri-reveal-2 mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Let's start a conversation about
            <span className="text-[#F47721]"> what comes next.</span>
          </h1>

          <p className="afri-reveal afri-reveal-3 mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Have a research idea, a policy challenge, an innovation to
            develop or a partnership in mind? We would like to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT INFORMATION */}
          <div>
            <p className="afri-reveal text-xs font-bold uppercase tracking-[0.22em] text-[#0891A2]">
              Get In Touch
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-4xl">
              Let's explore how we can work together.
            </h2>

            <p className="afri-reveal afri-reveal-3 mt-5 leading-8 text-gray-600">
              AfriYouth works across research, innovation, policy and
              professional development. Reach out to discuss an idea,
              request information or explore a possible collaboration.
            </p>

            <div className="mt-10 space-y-6">
              <div className="afri-reveal afri-reveal-1 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F7F2E7]">
                  <Mail className="text-[#0891A2]" size={22} />
                </div>
                <div>
                  <h3 className="font-black">Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    For general inquiries and collaboration
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#10466B]">
                    Add your official email address
                  </p>
                </div>
              </div>

              <div className="afri-reveal afri-reveal-2 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F7F2E7]">
                  <MapPin className="text-[#0891A2]" size={22} />
                </div>
                <div>
                  <h3 className="font-black">Location</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Based in Africa, working towards solutions with
                    continental relevance.
                  </p>
                </div>
              </div>

              <div className="afri-reveal afri-reveal-3 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F7F2E7]">
                  <MessageCircle className="text-[#0891A2]" size={22} />
                </div>
                <div>
                  <h3 className="font-black">Partnerships & Collaboration</h3>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                    We welcome conversations with institutions, donors,
                    researchers, innovators and development partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="afri-reveal afri-reveal-4 mt-12 border-l-4 border-[#F47721] bg-[#F7F2E7] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0891A2]">
                Our approach
              </p>
              <p className="mt-3 text-lg font-black leading-snug">
                Every meaningful collaboration begins with understanding
                the challenge.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="afri-reveal afri-reveal-2 border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(16,70,107,0.07)] md:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0891A2]">
                Send an Inquiry
              </p>
              <h2 className="mt-3 text-2xl font-black md:text-3xl">
                Tell us what you have in mind.
              </h2>
            </div>

            {submitted ? (
              <div className="border border-[#0891A2]/20 bg-[#F7F2E7] p-7">
                <Send className="mb-4 text-[#0891A2]" size={30} />

                <h3 className="text-xl font-black">
                  Your message is ready.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  This form is currently a front-end demonstration and has
                  not sent your inquiry. Connect it to your email service or
                  backend to receive messages.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      organization: "",
                      subject: "General inquiry",
                      message: "",
                    });
                  }}
                  className="mt-6 font-bold text-[#0891A2] hover:text-[#F47721]"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Full name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#0891A2]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#0891A2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Organization
                  </label>
                  <input
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Organization or institution (optional)"
                    className="w-full border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#0891A2]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    What would you like to discuss? *
                  </label>
                  <select
                    required
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#0891A2]"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Your message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your idea, challenge or inquiry..."
                    className="w-full resize-y border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#0891A2]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#10466B] px-7 py-4 font-bold text-white transition hover:bg-[#F47721] sm:w-auto"
                >
                  Submit Inquiry <ArrowRight size={18} />
                </button>

                <p className="text-xs leading-5 text-gray-400">
                  Your information should only be used to respond to your
                  inquiry. Add your organization's privacy policy when the
                  form is connected to a live service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* REASONS TO CONNECT */}
      <section className="bg-[#10466B] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 max-w-2xl">
            <p className="afri-reveal text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Areas of Collaboration
            </p>

            <h2 className="afri-reveal afri-reveal-2 mt-4 text-3xl font-black md:text-5xl">
              What can we work on together?
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Research & Policy",
                text: "Evidence generation, policy analysis, institutional research and programme evaluation.",
              },
              {
                icon: Lightbulb,
                title: "Innovation & Ideas",
                text: "Human-centered design, prototyping, innovation challenges and venture development.",
              },
              {
                icon: Handshake,
                title: "Funding & Partnerships",
                text: "Resource mobilization, strategic partnerships and investment readiness.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`afri-reveal afri-reveal-${index + 3} border border-white/15 bg-white/[0.05] p-7`}
                >
                  <Icon size={28} className="text-[#F47721]" />

                  <h3 className="mt-5 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
