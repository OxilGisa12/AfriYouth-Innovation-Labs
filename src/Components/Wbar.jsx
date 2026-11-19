
import { useState } from "react";
import { Phone, UserRound, Search, X, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const searchPages = [
  {
    title: "Home",
    description: "Discover AfriYouth Innovation Labs",
    path: "/",
    keywords: ["home", "afriyouth", "welcome", "main page", "youth"],
  },
  {
    title: "About Us",
    description: "Learn about our mission, vision and organization",
    path: "/about",
    keywords: ["about", "organization", "mission", "vision", "who we are", "team"],
  },
  {
    title: "Fundraising",
    description: "Explore fundraising and resource mobilization",
    path: "/fundraising",
    keywords: ["fundraising", "fundraising opportunities", "donations", "resources", "mobilization"],
  },
  {
    title: "Contact Us",
    description: "Get in touch with AfriYouth",
    path: "/contact",
    keywords: ["contact", "reach us", "email", "phone", "address", "get in touch"],
  },
  {
    title: "Insights",
    description: "Explore articles, news and perspectives",
    path: "/insights",
    keywords: ["insights", "articles", "news", "blogs", "publications", "updates"],
  },
  {
    title: "Privacy Policy",
    description: "Learn how we handle and protect your information",
    path: "/privacy-policy",
    keywords: ["privacy", "policy", "data", "protection", "personal information"],
  },
  {
    title: "Youth Innovation",
    description: "Explore youth innovation and entrepreneurship",
    path: "/programs/youth-innovation",
    keywords: ["youth", "innovation", "entrepreneurship", "young people", "startups"],
  },
  {
    title: "Research & Evidence",
    description: "Discover research, data and evidence-based insights",
    path: "/programs/research-evidence",
    keywords: ["research", "evidence", "data", "studies", "analysis"],
  },
  {
    title: "Policy & Governance",
    description: "Explore policy development and governance",
    path: "/programs/policy-governance",
    keywords: ["policy", "governance", "leadership", "institutions"],
  },
  {
    title: "Policy Innovation",
    description: "Discover innovative approaches to policy",
    path: "/programs/policy-innovation",
    keywords: ["policy innovation", "public policy", "innovation", "solutions"],
  },
  {
    title: "Strategic Foresight",
    description: "Explore future thinking and strategic planning",
    path: "/programs/strategic-foresight",
    keywords: ["strategic", "foresight", "future", "planning", "forecasting"],
  },
  {
    title: "Career Development",
    description: "Explore career growth and professional development",
    path: "/programs/career-development",
    keywords: ["career", "jobs", "employment", "skills", "professional development", "training"],
  },
  {
    title: "Impact & Learning",
    description: "Discover impact measurement and organizational learning",
    path: "/programs/impact-learning",
    keywords: ["impact", "learning", "evaluation", "monitoring", "results"],
  },
  {
    title: "Funding & Investment",
    description: "Explore funding opportunities and investment",
    path: "/programs/funding-investment",
    keywords: ["funding", "investment", "finance", "grants", "capital"],
  },
];

const WelcomeBar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredResults = searchPages.filter((page) => {
    const searchText = searchQuery.trim().toLowerCase();

    if (!searchText) return false;

    const searchableContent = [
      page.title,
      page.description,
      ...page.keywords,
    ].join(" ").toLowerCase();

    return searchableContent.includes(searchText);
  });

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    if (filteredResults.length > 0) {
      navigate(filteredResults[0].path);
      setSearchQuery("");
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <div className="w-full bg-[#10466B] text-white relative z-[100] overflow-visible">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 py-3 overflow-visible">

        <div className="flex flex-wrap items-center justify-end gap-6 overflow-visible">

          {/* Contact */}
          <Link to="/contact">
            <div className="flex items-center gap-2 text-sm font-semibold hover:text-green-300 transition-colors">
              <Phone size={18} />
              <span>Contact Us</span>
            </div>
          </Link>

          {/* Privacy Policy */}
          <Link to="/privacy-policy">
            <div className="flex items-center gap-2 text-sm font-semibold hover:text-green-300 transition-colors">
              <UserRound size={19} />
              <span>Privacy Policy</span>
            </div>
          </Link>

          {/* Search */}
          <div className="relative z-[200] w-full sm:w-auto sm:min-w-[300px]">

            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-full p-1 w-full"
            >
              <Search size={19} className="text-gray-500 ml-3 shrink-0" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                placeholder="Search AfriYouth..."
                autoComplete="off"
                aria-label="Search AfriYouth website"
                className="flex-1 min-w-0 px-3 py-2 text-sm text-gray-700 outline-none rounded-full"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setShowResults(false);
                  }}
                  className="text-gray-400 hover:text-gray-700 p-1"
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}

              <button
                type="submit"
                className="bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition shrink-0"
              >
                SEARCH
              </button>
            </form>

            {/* Search Results Dropdown */}
            {showResults && searchQuery.trim() && (
              <div className="absolute top-full right-0 mt-3 z-[999] w-full sm:w-[380px] min-h-[110px] bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 overflow-hidden">

                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Search Results
                  </span>

                  <button
                    type="button"
                    onClick={() => setShowResults(false)}
                    className="text-gray-400 hover:text-gray-700"
                    aria-label="Close search results"
                  >
                    <X size={16} />
                  </button>
                </div>

                {filteredResults.length > 0 ? (
                  <div className="max-h-[320px] overflow-y-auto py-2">

                    {filteredResults.map((result) => (
                      <button
                        key={result.path}
                        type="button"
                        onClick={() => handleResultClick(result.path)}
                        className="w-full min-h-[64px] text-left px-4 py-3 hover:bg-green-50 transition flex items-center justify-between gap-3 group"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#10466B] group-hover:text-[#16A34A]">
                            {result.title}
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            {result.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="text-gray-400 group-hover:text-[#16A34A] shrink-0"
                        />
                      </button>
                    ))}

                  </div>
                ) : (
                  <div className="px-5 py-8 text-center">
                    <Search size={25} className="mx-auto text-gray-300 mb-3" />

                    <p className="text-sm font-semibold text-gray-700">
                      No results found
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Try another keyword or explore our website.
                    </p>
                  </div>
                )}

                <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
                  <p className="text-[11px] text-gray-400">
                    AfriYouth Innovation Labs
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomeBar;
