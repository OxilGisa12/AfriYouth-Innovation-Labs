import ProgramPage from "../../Components/ProgramPage";

const program = {
  "eyebrow": "Policy & Governance Lab",
  "title": "Turn evidence",
  "accent": "into better decisions.",
  "intro": "We translate research into actionable policy recommendations and support institutions to develop more responsive, effective and inclusive policies and governance systems.",
  "overviewTitle": "Connecting research, institutions and implementation.",
  "overview": [
    "Evidence creates value when it can inform decisions. The Policy & Governance Lab works at the point where research, public priorities and institutional action meet.",
    "We examine policy challenges, review existing frameworks and identify practical options for reform. Our work considers the institutional context, the interests of different stakeholders and the conditions required for implementation.",
    "We also create spaces for informed dialogue, helping researchers, young people, public institutions and other stakeholders engage with policy questions and possible solutions."
  ],
  "purpose": "Policy analysis and institutional support grounded in evidence, context and practical implementation.",
  "services": [
    "Policy analysis and design",
    "Policy review and reform support",
    "Regulatory analysis",
    "Policy briefs and recommendations",
    "Governance diagnostics",
    "Public-sector innovation",
    "Stakeholder mapping and analysis",
    "Policy dialogue facilitation",
    "Policy implementation support"
  ],
  "processTitle": "A practical route from analysis to action.",
  "processIntro": "Our approach considers not only what a policy should achieve, but also the institutions, relationships and resources needed to put it into practice.",
  "stages": [
    {
      "title": "Understand",
      "description": "Define the policy issue, review available evidence and understand the institutional environment."
    },
    {
      "title": "Analyse",
      "description": "Assess policy options, governance arrangements, stakeholders and implementation constraints."
    },
    {
      "title": "Recommend",
      "description": "Develop clear, realistic recommendations and options for institutional or regulatory improvement."
    },
    {
      "title": "Engage",
      "description": "Support dialogue, communication and implementation planning with relevant stakeholders."
    }
  ],
  "productLabel": "Intellectual Product",
  "productName": "AfriYouth Policy Solutions Series",
  "productDescription": "A series of evidence-informed policy products that examine important African challenges and present practical recommendations for decision-makers and institutions.",
  "outputsTitle": "What the work can produce",
  "outputsIntro": "Our policy work is intended to support understanding, dialogue and implementation.",
  "outputs": [
    "Policy analysis and review documents",
    "Governance and institutional diagnostic reports",
    "Policy briefs and reform recommendations",
    "Stakeholder maps and engagement plans",
    "Policy dialogue and implementation support"
  ],
  "audience": "Government institutions, development partners, civil society organizations, research institutions, regional bodies and other stakeholders working to improve policy and governance outcomes.",
  "closingTitle": "Working through a policy challenge?",
  "closingText": "Let's examine the evidence, understand the institutional context and identify practical policy options that can support meaningful change."
};

const PolicyGovernance = () => <ProgramPage program={program} />;

export default PolicyGovernance;
