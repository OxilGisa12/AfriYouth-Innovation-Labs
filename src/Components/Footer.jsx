
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Our Programs",
      links: [
        { name: "Youth Innovation & Venture Lab", href: "/programs/youth-innovation" },
        { name: "Research & Evidence Lab", href: "/programs/research-evidence" },
        { name: "Policy & Governance Lab", href: "/programs/policy-governance" },
        { name: "Policy Innovation Challenge", href: "/programs/policy-innovation" },
        { name: "Strategic Foresight & Futures Lab", href: "/programs/strategic-foresight" },
        { name: "Career & Professional Development", href: "/programs/career-development" },
        { name: "Impact & Learning Services", href: "/programs/impact-learning" },
        { name: "Funding & Investment Readiness", href: "/programs/funding-investment" },
      ],
    },
    {
      title: "About AfriYouth",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Mission & Vision", href: "/about#mission" },
        { name: "Our Capabilities", href: "/about#capabilities" },
        { name: "What Makes Us Different", href: "/about#difference" },
        { name: "Our Philosophy", href: "/about#philosophy" },
      ],
    },
    {
      title: "Explore",
      links: [
        { name: "Our Initiatives", href: "/programs/youth-innovation" },
        { name: "Research & Publications", href: "/programs/research-evidence" },
        { name: "Policy Solutions", href: "/programs/policy-governance" },
        { name: "Opportunities", href: "/programs/career-development" },
        { name: "News & Insights", href: "/insights" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "" },
    { name: "Instagram", href: "" },
    { name: "LinkedIn", href: "" },
    { name: "YouTube", href: "" },
    { name: "X", href: "" },
  ];

  return (
    <footer className="bg-[#082F4A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-9">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9 lg:gap-7">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center mb-5"
              aria-label="AfriYouth Innovation Labs home"
            >
              <img
                src="/images/Logo.png"
                alt="AfriYouth Innovation Labs"
                className="block h-[90px] sm:h-[100px] w-auto max-w-[280px] object-contain object-left"
              />
            </Link>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href || undefined}
                  target={social.href ? "_blank" : undefined}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  onClick={!social.href ? (e) => e.preventDefault() : undefined}
                  aria-label={social.name}
                  className={`text-sm transition-colors duration-200 ${
                    social.href
                      ? "text-white/65 hover:text-white"
                      : "text-white/40 cursor-default"
                  }`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-5 text-white">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[13px] text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-11 pt-7 border-t border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            <div>
              <p className="text-white text-[10px] font-bold uppercase tracking-[0.18em] mb-2">
                Let's Build Together
              </p>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-lg text-white">
                Africa's future needs evidence, ideas and action.
              </h3>

              <p className="text-white/60 text-[13px] mt-3 max-w-md leading-6">
                Connect with young researchers, innovators, entrepreneurs
                and changemakers working towards a more inclusive and
                sustainable Africa.
              </p>
            </div>

            <div className="md:flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-[#C723DF] hover:bg-[#e56512] dark:hover:bg-[#A91CC0] text-white px-5 py-3 rounded-md font-semibold text-xs transition-colors duration-200 group"
              >
                Connect With Us

                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 text-[13px] text-white/60">

          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={15} className="text-white" />
            Contact AfriYouth
          </Link>

          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-white" />
            Advancing African solutions
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-[11px] text-white/50 text-center md:text-left">
            © {currentYear} AfriYouth Innovation Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[11px] text-white/50">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="text-[11px] text-white/50 text-center">
            Think. Research. Design. Build. Influence. Scale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
