
import { Link } from "react-router-dom";
import {
  LockKeyhole,
  Eye,
  UserCheck,
  Mail,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information", title: "Information We Collect" },
    { id: "usage", title: "How We Use Your Information" },
    { id: "sharing", title: "Information Sharing" },
    { id: "security", title: "Data Security" },
    { id: "retention", title: "Data Retention" },
    { id: "rights", title: "Your Privacy Rights" },
    { id: "cookies", title: "Cookies and Website Technologies" },
    { id: "third-party", title: "Third-Party Links" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  const highlights = [
    {
      icon: LockKeyhole,
      title: "Your Information",
      description:
        "We aim to handle personal information responsibly and transparently.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We explain how information may be collected and used.",
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      description:
        "You can contact us with questions or requests about your information.",
    },
  ];

  const policySections = [
    {
      id: "introduction",
      title: "01. Introduction",
      content: (
        <>
          <p>
            AfriYouth Innovation Labs is committed to respecting the privacy
            of individuals who visit our website, participate in our
            initiatives, access our programs or communicate with our team.
          </p>
          <p>
            This Privacy Policy describes our approach to personal
            information and applies to information collected through our
            website, communication channels, applications and activities,
            where applicable.
          </p>
        </>
      ),
    },
    {
      id: "information",
      title: "02. Information We Collect",
      content: (
        <>
          <p>
            Depending on how you interact with AfriYouth, we may collect
            the following categories of information:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Your name, email
              address, telephone number and other details you voluntarily
              provide when contacting us or registering for our initiatives.
            </li>
            <li>
              <strong>Program Information:</strong> Information submitted
              through applications, registrations, surveys, research
              activities or participation in our programs.
            </li>
            <li>
              <strong>Technical Information:</strong> Where applicable,
              browser type, device information, IP address and website
              usage data.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "usage",
      title: "03. How We Use Your Information",
      content: (
        <>
          <p>
            Information collected may be used for legitimate organizational
            purposes, including:
          </p>
          <ul>
            <li>Responding to inquiries and communication requests.</li>
            <li>Managing program applications and registrations.</li>
            <li>Delivering and improving our initiatives and services.</li>
            <li>Sharing relevant updates, opportunities and announcements.</li>
            <li>Conducting research, evaluation and impact assessment.</li>
            <li>Maintaining website functionality and security.</li>
            <li>Meeting applicable legal and regulatory obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "sharing",
      title: "04. Information Sharing",
      content: (
        <>
          <p>
            AfriYouth does not intend to make personal information publicly
            available without an appropriate reason or authorization.
          </p>
          <p>
            Information may be shared with authorized service providers,
            collaborators or institutional partners where necessary for
            legitimate activities, subject to appropriate safeguards.
          </p>
          <p>
            Information may also be disclosed where required by applicable
            law or a lawful request from a competent authority.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "05. Data Security",
      content: (
        <>
          <p>
            We aim to implement reasonable organizational and technical
            safeguards to protect personal information against unauthorized
            access, disclosure, alteration, loss or misuse.
          </p>
          <p>
            However, no method of transmitting or storing information
            electronically can be guaranteed to be completely secure.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "06. Data Retention",
      content: (
        <p>
          Personal information may be retained only for as long as reasonably
          necessary to fulfill the purposes for which it was collected,
          meet operational requirements or comply with applicable legal
          obligations.
        </p>
      ),
    },
    {
      id: "rights",
      title: "07. Your Privacy Rights",
      content: (
        <>
          <p>
            Subject to applicable data protection laws, individuals may
            have rights to:
          </p>
          <ul>
            <li>Request access to their personal information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion where legally applicable.</li>
            <li>Object to or request restriction of certain processing.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Raise concerns about how their information is handled.</li>
          </ul>
          <p>
            To exercise an applicable right, please contact us using
            the details provided below.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "08. Cookies and Website Technologies",
      content: (
        <>
          <p>
            Our website may use cookies or similar technologies to support
            essential website functions, understand website usage and
            improve user experience.
          </p>
          <p>
            Where applicable, information about cookie use and available
            preferences will be provided through the website.
          </p>
        </>
      ),
    },
    {
      id: "third-party",
      title: "09. Third-Party Links",
      content: (
        <p>
          Our website may contain links to external websites and platforms.
          These services operate under their own privacy policies and
          practices. We encourage visitors to review those policies before
          providing personal information to third parties.
        </p>
      ),
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: (
        <p>
          We recognize the importance of protecting the privacy of children
          and young people. Where activities involve minors, appropriate
          safeguards, permissions and applicable legal requirements
          should be observed.
        </p>
      ),
    },
    {
      id: "changes",
      title: "11. Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy when our activities, website
          practices or applicable legal requirements change. Updated
          versions will be published on this page with a revised
          effective date.
        </p>
      ),
    },
  ];

  return (
    <main className="afri-page min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden afri-brand-bg text-white">
        <div className="absolute -top-32 -right-20 w-96 h-96 bg-[#F47721]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#26B8D1]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">

          <div className="flex items-center gap-2 text-white/60 text-xs mb-8">
            <Link to="/" className="hover:text-[#F47721] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Privacy <span className="text-[#F47721]">Policy.</span>
            </h1>

            <p className="mt-6 text-white/75 text-sm sm:text-base leading-8 max-w-2xl">
              At AfriYouth Innovation Labs, we recognize the importance of
              your privacy. This policy explains how information may be
              collected, used, stored and protected when you interact with
              our website and services.
            </p>

            <p className="mt-7 text-xs text-white/60">
              Effective date: [Insert publication date]
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="afri-surface afri-border border rounded-lg p-6"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#F47721]/10 text-[#F47721] mb-4">
                  <Icon size={21} />
                </div>

                <h3 className="afri-text-primary font-bold text-base mb-2">
                  {item.title}
                </h3>

                <p className="afri-text-secondary text-sm leading-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">

          {/* Table of Contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="afri-surface afri-border border rounded-lg p-6">
              <h3 className="afri-text-primary text-sm font-bold mb-5">
                IN THIS POLICY
              </h3>

              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="afri-text-secondary block text-[13px] hover:text-[#F47721] transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="max-w-3xl space-y-12">
            {policySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="afri-text-primary text-2xl font-bold mb-4">
                  {section.title}
                </h2>

                <div className="afri-text-secondary text-sm leading-8 space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_li]:pl-1 [&_strong]:afri-text-primary">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section
              id="contact"
              className="scroll-mt-28 afri-surface afri-border border rounded-lg p-7 sm:p-9"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#F47721]/10 text-[#F47721] rounded-lg mb-5">
                <Mail size={22} />
              </div>

              <h2 className="afri-text-primary text-2xl font-bold mb-4">
                12. Contact Us
              </h2>

              <p className="afri-text-secondary text-sm leading-8">
                If you have questions, concerns or requests regarding
                this Privacy Policy or the handling of your personal
                information, please get in touch with AfriYouth
                Innovation Labs.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#F47721] hover:gap-3 transition-all"
              >
                Contact Our Team
                <ArrowRight size={16} />
              </Link>
            </section>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="afri-brand-bg text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <p className="text-[#F47721] text-xs font-bold uppercase tracking-widest mb-3">
              AfriYouth Innovation Labs
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Building trust through transparency.
            </h2>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#F47721] hover:bg-[#e56512] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;
