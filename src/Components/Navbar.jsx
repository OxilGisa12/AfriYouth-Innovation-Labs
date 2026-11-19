
import { useState } from "react";
import { Link} from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const programs = [
    { name: "Youth Innovation & Venture Lab", href: "/programs/youth-innovation" },
    { name: "Research & Evidence Lab", href: "/programs/research-evidence" },
    { name: "Policy & Governance Lab", href: "/programs/policy-governance" },
    { name: "Policy Innovation Challenge", href: "/programs/policy-innovation" },
    { name: "Strategic Foresight & Futures Lab", href: "/programs/strategic-foresight" },
    { name: "Career & Professional Development Academy", href: "/programs/career-development" },
    { name: "Impact & Learning Services", href: "/programs/impact-learning" },
    { name: "Funding & Investment Readiness", href: "/programs/funding-investment" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FundRaising", href: "/fundraising" }, 
      { name: "Insights", href: "/insights" },
    { name: "", href: "#members" }
 
  ];

  const closeMenus = () => {
    setMobileOpen(false);
    setProgramsOpen(false);
    setMobileProgramsOpen(false);
  };

  const navText = isDark
    ? "text-[#F7F2E7] hover:text-[#0301FF]"
    : "text-gray-700 hover:text-[#16A34A]";

  const borderColor = isDark
    ? "border-white/10"
    : "border-gray-100";

  const dropdownBg = isDark
    ? "bg-[#17102F] border-white/10"
    : "bg-white border-gray-100";

  const dropdownHover = isDark
    ? "hover:bg-[#0301FF]/10 hover:text-[#7775FF]"
    : "hover:bg-[#F3F7F4] hover:text-[#16A34A]";

  const themeToggle = (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-[#0301FF]/15 border-[#0301FF]/40 text-[#A5A4FF] hover:bg-[#0301FF]/25"
          : "bg-[#F7F2E7] border-gray-200 text-[#10466B] hover:bg-orange-50"
      }`}
    >
      <span className="transition-all duration-300">
        {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
      </span>
    </button>
  );

  const renderNavigationLink = (link, mobile = false) => {
    const className = mobile
      ? `flex items-center justify-between py-3 px-2 text-[15px] font-semibold transition-colors ${
          isDark
            ? "text-gray-200 hover:text-[#7775FF] hover:bg-white/5"
            : "text-gray-700 hover:text-[#F47721] hover:bg-gray-50"
        }`
      : `flex items-center gap-1 text-[15px] font-semibold transition-colors whitespace-nowrap ${navText}`;

    if (link.href.startsWith("#")) {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={closeMenus}
          className={className}
        >
          {link.name}
        </a>
      );
    }

    return (
      <Link
        key={link.name}
        to={link.href}
        onClick={closeMenus}
        className={className}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav
      className={`w-full border-b relative z-50 transition-colors duration-300 ${
        isDark
          ? "bg-[#0D0624] border-white/10"
          : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="min-h-[110px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="shrink-0 flex items-center justify-start"
          >
            <img
              src="/images/Logo.png"
              alt="AfriYouth Innovation Labs"
              className="block w-auto h-[68px] max-w-[190px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {links.slice(0, 3).map((link) =>
              renderNavigationLink(link)
            )}

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className={`flex items-center gap-1 text-[15px] font-semibold whitespace-nowrap transition-colors ${
                  programsOpen
                    ? isDark
                      ? "text-[#7775FF]"
                      : "text-[#16A34A]"
                    : navText
                }`}
                aria-expanded={programsOpen}
                aria-haspopup="true"
              >
                Programs
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {programsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[370px] z-50">
                  <div className={`${dropdownBg} border shadow-xl rounded-lg py-3 transition-colors duration-300`}>
                    <div className={`px-5 py-3 border-b ${borderColor}`}>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#F47721]">
                        Explore Our Programs
                      </p>
                      <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        Discover opportunities to learn, innovate and grow.
                      </p>
                    </div>

                    <div className="py-2">
                      {programs.map((program, index) => (
                        <Link
                          key={program.name}
                          to={program.href}
                          onClick={closeMenus}
                          className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors group ${dropdownHover} ${
                            isDark ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <span className={`text-xs font-semibold w-5 ${
                            isDark ? "text-gray-500" : "text-gray-400"
                          }`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="flex-1 font-medium">
                            {program.name}
                          </span>

                          <ArrowUpRight
                            size={15}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F47721]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {links.slice(3).map((link) =>
              renderNavigationLink(link)
            )}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            {themeToggle}

            <Link
              to="/reach-us"
              className={`inline-flex items-center justify-center text-white font-bold text-sm px-7 py-4 rounded-full transition-all whitespace-nowrap ${
                isDark
                  ? "bg-[#0301FF] hover:bg-[#2523FF] shadow-[0_5px_0_#0800A0]"
                  : "bg-[#0876B9] hover:bg-[#075F94] shadow-[0_5px_0_#06466F]"
              }`}
            >
              Become Part of AfriYouth
            </Link>
          </div>

          {/* Mobile Theme Toggle + Menu */}
          <div className="xl:hidden flex items-center gap-3">
            {themeToggle}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors ${
                isDark ? "text-white" : "text-[#10466B]"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className={`xl:hidden border-t py-5 transition-colors duration-300 ${borderColor}`}>
            <div className="flex flex-col gap-1">
              {links.slice(0, 3).map((link) =>
                renderNavigationLink(link, true)
              )}

              {/* Mobile Programs Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className={`w-full flex items-center justify-between py-3 px-2 text-[15px] font-semibold transition-colors ${
                    isDark
                      ? "text-gray-200 hover:text-[#7775FF]"
                      : "text-gray-700 hover:text-[#F47721]"
                  }`}
                  aria-expanded={mobileProgramsOpen}
                >
                  Programs
                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      mobileProgramsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileProgramsOpen && (
                  <div className={`rounded-lg py-2 px-3 ${
                    isDark ? "bg-[#17102F]" : "bg-[#F3F7F4]"
                  }`}>
                    {programs.map((program, index) => (
                      <Link
                        key={program.name}
                        to={program.href}
                        onClick={closeMenus}
                        className={`flex items-start gap-3 py-3 px-2 text-sm transition-colors ${
                          isDark
                            ? "text-gray-300 hover:text-[#7775FF]"
                            : "text-gray-600 hover:text-[#16A34A]"
                        }`}
                      >
                        <span className="text-xs font-bold text-[#F47721] mt-0.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{program.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {links.slice(3).map((link) =>
                renderNavigationLink(link, true)
              )}

              {/* Mobile CTA */}
              <a
                href="#team"
                onClick={closeMenus}
                className={`mt-4 text-center text-white font-bold text-sm px-6 py-4 rounded-full transition-all ${
                  isDark
                    ? "bg-[#0301FF] hover:bg-[#2523FF] shadow-[0_5px_0_#0800A0]"
                    : "bg-[#0876B9] hover:bg-[#075F94] shadow-[0_5px_0_#06466F]"
                }`}
              >
                Become Part of the Team
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
