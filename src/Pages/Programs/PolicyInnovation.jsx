import ProgramPage from "../../Components/ProgramPage";

const program = {
  "eyebrow": "Policy Innovation Challenge",
  "title": "Start with Africa's",
  "accent": "most pressing problems.",
  "intro": "We invite young people to investigate real policy challenges and develop evidence-based solutions. The focus is not simply on what business to start, but on what needs to change and how it can be done.",
  "overviewTitle": "A different kind of challenge for young problem-solvers.",
  "overview": [
    "Many innovation programmes ask young people what business they would like to start. The AfriYouth Policy Innovation Challenge begins with a different question: What is one of Africa's most pressing problems, and what evidence-based solution can you design?",
    "Participants work on real issues, investigate their causes, engage with available evidence and develop proposals that respond to the wider systems shaping those issues.",
    "Through research, diagnosis, policy development and prototyping, young people learn to move from identifying a problem to presenting a practical proposal that institutions and communities can consider."
  ],
  "purpose": "A platform where young people apply research, systems thinking and creativity to policy problems that matter.",
  "services": [
    "Problem identification and framing",
    "Research and evidence gathering",
    "Root-cause and systems diagnosis",
    "Policy analysis and proposal development",
    "Human-centered solution design",
    "Prototype development and testing",
    "Policy pitch preparation",
    "Expert feedback and mentorship"
  ],
  "processTitle": "Research. Diagnose. Propose. Present.",
  "processIntro": "Participants follow a practical challenge pathway that turns a complex issue into a reasoned policy proposal and a solution that can be discussed and tested.",
  "stages": [
    {
      "title": "Research",
      "description": "Investigate the challenge, gather evidence and understand who is affected and how."
    },
    {
      "title": "Diagnosis",
      "description": "Examine root causes, systems and institutional factors that contribute to the problem."
    },
    {
      "title": "Policy proposal",
      "description": "Develop a practical, evidence-informed recommendation and explain how it could work."
    },
    {
      "title": "Prototype and pitch",
      "description": "Demonstrate the proposed solution, receive feedback and present it to a review audience."
    }
  ],
  "productLabel": "Final Product",
  "productName": "Policy Innovation Demo Day",
  "productDescription": "A platform for participants to present their research, policy proposals and prototypes to practitioners, institutions, researchers and potential implementation partners.",
  "outputsTitle": "Potential challenge themes",
  "outputsIntro": "Themes can be selected in response to emerging priorities and partner interests.",
  "outputs": [
    "Youth employment and the future of work",
    "Education and skills development",
    "Digital transformation and artificial intelligence",
    "Agriculture and food systems",
    "Climate and environmental resilience",
    "Health, entrepreneurship and urban development",
    "Regional integration"
  ],
  "audience": "Young researchers, university students, emerging policy thinkers, community innovators, academic institutions, public agencies, development organizations and partners interested in evidence-led policy innovation.",
  "closingTitle": "What problem deserves a better solution?",
  "closingText": "Partner with AfriYouth to shape a challenge around a real policy issue and give young people the opportunity to research it, develop proposals and present practical solutions."
};

const PolicyInnovation = () => <ProgramPage program={program} />;

export default PolicyInnovation;
