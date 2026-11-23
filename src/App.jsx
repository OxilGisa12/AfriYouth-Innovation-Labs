
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wbar from "./Components/Wbar";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ScrollAnimations from "./Components/ScrollAnimations";

import About from "./Pages/About";
import Fundraising from "./Pages/Fundraising";
import Contact from "./Pages/Contact";
import Insights from "./Pages/Insights";

import YouthInnovation from "./Pages/Programs/YouthInnovation";
import ResearchEvidence from "./Pages/Programs/ResearchEvidence";
import PolicyGovernance from "./Pages/Programs/PolicyGovernance";
import PolicyInnovation from "./Pages/Programs/PolicyInnovation";
import StrategicForesight from "./Pages/Programs/StrategicForesight";
import CareerDevelopment from "./Pages/Programs/CareerDevelopment";
import ImpactLearning from "./Pages/Programs/ImpactLearning";
import FundingInvestment from "./Pages/Programs/FundingInvestment";

import ScrollToTop from "./Components/ScrollToTop";
import { ThemeProvider } from "./ThemeContext";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AutoScroll from "./Components/Autoscroll";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
       <AutoScroll />
        <Wbar />
        <ScrollAnimations />
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reach-us" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/programs/youth-innovation" element={<YouthInnovation />} />
          <Route path="/programs/research-evidence" element={<ResearchEvidence />} />
          <Route path="/programs/policy-governance" element={<PolicyGovernance />} />
          <Route path="/programs/policy-innovation" element={<PolicyInnovation />} />
          <Route path="/programs/strategic-foresight" element={<StrategicForesight />} />
          <Route path="/programs/career-development" element={<CareerDevelopment />} />
          <Route path="/programs/impact-learning" element={<ImpactLearning />} />
          <Route path="/programs/funding-investment" element={<FundingInvestment />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
