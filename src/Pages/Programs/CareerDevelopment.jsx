import ProgramPage from "../../Components/ProgramPage";

const program = {
  "eyebrow": "Career & Professional Development Academy",
  "title": "Build capability.",
  "accent": "Put it into practice.",
  "intro": "We help young people and professionals develop the competencies, confidence and practical experience needed to move from learning into meaningful work and continued career growth.",
  "overviewTitle": "Learning should lead to demonstrated ability.",
  "overview": [
    "The transition from education to employment can be difficult when people have knowledge but limited experience applying it. The Career & Professional Development Academy is designed to close that gap through practical, evidence-based learning.",
    "Our employability programmes support graduates and university students with the tools and experience needed to navigate recruitment, communicate their value and prepare for workplace expectations.",
    "Our professional development programmes strengthen capabilities that matter across sectors, including leadership, critical thinking, communication, digital and AI literacy, project management and career adaptability."
  ],
  "purpose": "A practical development pathway that connects education, employability, employment and career progression.",
  "services": [
    "CV and cover-letter customization",
    "LinkedIn and professional portfolio development",
    "Job-search and application strategies",
    "Understanding job descriptions and ATS",
    "Networking and interview readiness",
    "Professional etiquette and salary negotiation",
    "Leadership, teamwork and change management",
    "Critical thinking and problem-solving",
    "Digital productivity and responsible AI use",
    "Project management, results-based management and M&E"
  ],
  "processTitle": "Learn. Practice. Apply. Improve.",
  "processIntro": "We place experiential learning at the centre of the Academy. Participants practise realistic tasks, receive feedback and demonstrate what they can do.",
  "stages": [
    {
      "title": "Assess",
      "description": "Identify current competencies, development needs and the goals participants want to achieve."
    },
    {
      "title": "Learn",
      "description": "Build relevant knowledge and practical skills through focused training and guided activities."
    },
    {
      "title": "Apply",
      "description": "Complete realistic simulations, workplace challenges and practical assignments."
    },
    {
      "title": "Demonstrate",
      "description": "Receive feedback, improve performance and build a portfolio of demonstrated competencies."
    }
  ],
  "productLabel": "Two Core Programmes",
  "productName": "Employability Bootcamp & University Employability Programme",
  "productDescription": "The Employability Bootcamp supports graduates preparing to enter the workforce. The University Employability Programme helps students prepare early for the transition from university into employment.",
  "outputsTitle": "The learning experience",
  "outputsIntro": "Participants work through practical exercises and receive feedback at each stage.",
  "outputs": [
    "Analyse a fictional job description and research an employer",
    "Customize a CV and write a relevant cover letter",
    "Complete an application and psychometric exercise",
    "Participate in a structured interview and case study",
    "Practise professional communication and salary negotiation",
    "Develop a professional portfolio and personal development plan"
  ],
  "audience": "University students, recent graduates, early-career professionals, employers, universities and institutions seeking to strengthen employability and professional competencies.",
  "closingTitle": "Move from knowing to demonstrating.",
  "closingText": "Connect with AfriYouth to explore practical employability and professional development programmes for your institution, students or team."
};

const CareerDevelopment = () => <ProgramPage program={program} />;

export default CareerDevelopment;
