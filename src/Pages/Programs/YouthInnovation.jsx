import ProgramPage from "../../Components/ProgramPage";

const program = {
  "eyebrow": "Youth Innovation & Venture Lab",
  "title": "From promising ideas",
  "accent": "to practical ventures.",
  "intro": "We support young innovators to move from identifying a challenge to designing, testing and developing solutions with the potential to create meaningful social and economic value.",
  "overviewTitle": "Helping ideas become solutions that can grow.",
  "overview": [
    "The Youth Innovation & Venture Lab creates a structured pathway for young people with promising ideas. We begin with the problems people experience, rather than assuming that every solution must start as a business.",
    "Through human-centered design, applied learning and venture development, participants investigate needs, test assumptions and build solutions that respond to real communities and markets.",
    "Our approach combines incubation and acceleration with evidence, mentorship and practical validation. The goal is not simply to produce more ideas, but to strengthen the ones with a clear purpose and potential."
  ],
  "purpose": "A practical pathway for African innovators to discover problems, develop solutions and build ventures with purpose.",
  "services": [
    "Idea discovery and problem definition",
    "Human-centered design and design thinking",
    "Business-model development",
    "Prototype development and testing",
    "Market validation and customer discovery",
    "Incubation and venture development",
    "Acceleration and growth planning",
    "Pitch preparation and investor readiness",
    "Impact measurement and learning"
  ],
  "processTitle": "A pathway from discovery to readiness.",
  "processIntro": "Our model gives promising ideas the time, structure and support needed to become tested solutions and investment-ready ventures.",
  "stages": [
    {
      "title": "Incubation",
      "description": "Explore community needs, define the problem, understand users and develop a promising solution concept."
    },
    {
      "title": "Acceleration",
      "description": "Test prototypes, validate the market, strengthen the business model and prepare for sustainable growth."
    },
    {
      "title": "Demo Day",
      "description": "Present validated solutions, demonstrate progress and connect with potential partners, funders and investors."
    },
    {
      "title": "Learning",
      "description": "Review evidence, feedback and impact to identify what should improve before further growth."
    }
  ],
  "productLabel": "Flagship Product",
  "productName": "AfriYouth Innovation Accelerator",
  "productDescription": "A structured incubation and acceleration experience that helps young innovators turn evidence-informed ideas into tested, viable and impact-oriented ventures.",
  "outputsTitle": "What participants work towards",
  "outputsIntro": "The programme is designed around demonstrated progress, not participation alone.",
  "outputs": [
    "A clearly defined problem and user need",
    "A tested prototype or minimum viable solution",
    "A validated business or operating model",
    "A venture pitch and growth plan",
    "An initial impact and measurement framework"
  ],
  "audience": "Young innovators, early-stage founders, university teams, community problem-solvers, innovation partners and institutions seeking practical pathways to support youth-led solutions.",
  "closingTitle": "Have an idea worth testing?",
  "closingText": "Work with AfriYouth to investigate the challenge, test your assumptions and develop a solution grounded in the needs of the people it is intended to serve."
};

const YouthInnovation = () => <ProgramPage program={program} />;

export default YouthInnovation;
