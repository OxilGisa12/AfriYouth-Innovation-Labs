import ProgramPage from "../../Components/ProgramPage";

const program = {
  "eyebrow": "Impact & Learning Services",
  "title": "Understand what works.",
  "accent": "Demonstrate the impact.",
  "intro": "We help organizations move beyond reporting activities to understand whether their programmes are creating meaningful outcomes and what can be improved.",
  "overviewTitle": "Measure progress. Learn from evidence. Improve results.",
  "overview": [
    "Organizations invest time and resources in programmes intended to improve people's lives. Demonstrating whether those programmes work requires clear outcomes, appropriate indicators and reliable information.",
    "AfriYouth supports organizations to develop practical monitoring, evaluation and learning systems that connect programme activities to intended results. We help clarify what success means, how it can be measured and how findings can inform decisions.",
    "Our approach treats measurement as a learning process, not simply a reporting requirement. Evidence should help teams understand progress, identify gaps and improve implementation."
  ],
  "purpose": "Practical measurement and learning support that helps organizations understand, communicate and improve their results.",
  "services": [
    "Theory of Change development",
    "Logical frameworks",
    "Monitoring and evaluation systems",
    "Key performance indicators",
    "Baseline and endline studies",
    "Outcome measurement",
    "Impact measurement and evaluation",
    "Learning and performance reports",
    "Impact storytelling and communication"
  ],
  "processTitle": "Build a clear line from activity to impact.",
  "processIntro": "We work with organizations to define intended change, identify useful evidence and make learning part of programme implementation.",
  "stages": [
    {
      "title": "Define",
      "description": "Clarify the intended outcomes, assumptions and pathways through a Theory of Change or results framework."
    },
    {
      "title": "Measure",
      "description": "Select indicators, establish baselines and gather information that can show progress."
    },
    {
      "title": "Learn",
      "description": "Review findings, assess what is working and identify implementation challenges and lessons."
    },
    {
      "title": "Improve",
      "description": "Use evidence to strengthen programme decisions, communicate results and adapt future work."
    }
  ],
  "productLabel": "Digital Product Concept",
  "productName": "AfriYouth Impact Dashboard",
  "productDescription": "A structured impact-monitoring product designed to help organizations bring key indicators, programme progress and learning information into a clearer view.",
  "outputsTitle": "Support organizations to produce",
  "outputsIntro": "The exact outputs depend on programme objectives, available data and reporting needs.",
  "outputs": [
    "Theory of Change and results frameworks",
    "Monitoring, evaluation and learning plans",
    "Indicator and KPI frameworks",
    "Baseline, endline and outcome reports",
    "Programme learning and performance reports",
    "Evidence-based impact stories"
  ],
  "audience": "NGOs, development organizations, social enterprises, public institutions, foundations, programme teams and funders seeking stronger evidence of results and learning.",
  "closingTitle": "Can you clearly demonstrate your results?",
  "closingText": "Let's strengthen the way your organization defines, measures and communicates change, and make evidence more useful to programme decisions."
};

const ImpactLearning = () => <ProgramPage program={program} />;

export default ImpactLearning;
