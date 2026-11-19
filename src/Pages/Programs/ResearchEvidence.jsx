import ProgramPage from "../../Components/ProgramPage";

const program = {
  "eyebrow": "Research & Evidence Lab",
  "title": "Understand the challenge.",
  "accent": "Generate the evidence.",
  "intro": "We investigate Africa's emerging socio-economic challenges and generate reliable evidence that helps communities, institutions and decision-makers understand what is happening and what works.",
  "overviewTitle": "Better decisions begin with better evidence.",
  "overview": [
    "Complex challenges require more than assumptions. They require careful research, credible data and an understanding of the people, systems and institutions involved.",
    "The Research & Evidence Lab conducts applied research that responds to real questions facing communities, organizations and public institutions. We combine appropriate research methods with clear analysis to make findings useful and accessible.",
    "Our work connects evidence generation with practical decision-making. We aim to produce research that informs programmes, strengthens policy discussions and identifies opportunities for innovation."
  ],
  "purpose": "Independent, relevant and actionable evidence to help explain challenges and inform decisions.",
  "services": [
    "Applied policy research",
    "Socio-economic research",
    "Youth research and surveys",
    "Baseline and endline studies",
    "Impact assessments",
    "Programme evaluations",
    "Institutional and stakeholder analysis",
    "Political-economy analysis",
    "Research reports and policy briefs",
    "Evidence synthesis and knowledge products"
  ],
  "processTitle": "From research questions to usable findings.",
  "processIntro": "We use a structured research process that keeps the question, methodology, evidence and intended use connected.",
  "stages": [
    {
      "title": "Frame",
      "description": "Clarify the research question, context, stakeholders and decisions the evidence should inform."
    },
    {
      "title": "Investigate",
      "description": "Select suitable methods, collect information and engage relevant communities and institutions."
    },
    {
      "title": "Analyse",
      "description": "Interpret findings, identify patterns and examine what the evidence means for the challenge."
    },
    {
      "title": "Communicate",
      "description": "Present clear reports, briefs and recommendations that support learning and action."
    }
  ],
  "productLabel": "Core Product",
  "productName": "AfriYouth Evidence Reports",
  "productDescription": "Research products developed for organizations and institutions that need a clearer understanding of a challenge, programme, population or policy environment.",
  "outputsTitle": "Our evidence products",
  "outputsIntro": "Research is presented in formats that support different audiences and decisions.",
  "outputs": [
    "Socio-economic and thematic research reports",
    "Youth surveys and analytical findings",
    "Baseline, endline and impact studies",
    "Programme evaluation reports",
    "Policy briefs and evidence summaries"
  ],
  "audience": "Public institutions, development organizations, NGOs, research partners, businesses, funders and decision-makers seeking credible evidence to guide programmes, policy and investment.",
  "closingTitle": "What do you need to understand better?",
  "closingText": "Share your research question or evidence need. We can help define the inquiry, identify an appropriate approach and turn findings into useful knowledge."
};

const ResearchEvidence = () => <ProgramPage program={program} />;

export default ResearchEvidence;
