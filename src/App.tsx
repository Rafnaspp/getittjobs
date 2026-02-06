import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import StaffingServices from './pages/services/StaffingServices';
import ComplianceServices from './pages/services/ComplianceServices';
import RecruitmentServices from './pages/services/RecruitmentServices';
import ITIndustry from './pages/industries/ITIndustry';
import BankingIndustry from './pages/industries/BankingIndustry';
import RetailIndustry from './pages/industries/RetailIndustry';
import HealthcareIndustry from './pages/industries/HealthcareIndustry';
import ManufacturingIndustry from './pages/industries/ManufacturingIndustry';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import Disclaimer from './pages/legal/Disclaimer';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>GETITT - Leading Recruitment & Staffing Solutions in India</title>
                <meta name="description" content="GETITT is India's premier recruitment and staffing consultancy, offering fast-track talent solutions across IT, Banking, Healthcare, and Manufacturing sectors." />
                <link rel="canonical" href="https://getittjobs.com" />
              </Helmet>
              <HomePage />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Helmet>
                <title>Contact GETITT - Get Fast-Track Recruitment Solutions</title>
                <meta name="description" content="Contact GETITT for fast-track recruitment and staffing solutions. Connect with our expert team for your hiring needs across India." />
                <link rel="canonical" href="https://getittjobs.com/contact" />
              </Helmet>
              <ContactPage />
            </>
          } />
          <Route path="/services/staffing" element={
            <>
              <Helmet>
                <title>Staffing Services | GETITT - Professional Staffing Solutions</title>
                <meta name="description" content="Get flexible and efficient staffing solutions from GETITT. We provide comprehensive workforce management services across industries." />
                <link rel="canonical" href="https://getittjobs.com/services/staffing" />
              </Helmet>
              <StaffingServices />
            </>
          } />
          <Route path="/services/compliance-services" element={
            <>
              <Helmet>
                <title>Compliance Services | GETITT - HR Compliance Solutions</title>
                <meta name="description" content="Ensure your recruitment processes meet all regulatory requirements with GETITT's comprehensive compliance services." />
                <link rel="canonical" href="https://getittjobs.com/services/compliance-services" />
              </Helmet>
              <ComplianceServices />
            </>
          } />
          <Route path="/services/recruitment-services" element={
            <>
              <Helmet>
                <title>Recruitment Services | GETITT - Expert Talent Acquisition</title>
                <meta name="description" content="Transform your hiring process with GETITT's strategic recruitment services. Find top talent across industries efficiently." />
                <link rel="canonical" href="https://getittjobs.com/services/recruitment-services" />
              </Helmet>
              <RecruitmentServices />
            </>
          } />
          <Route path="/industries/it" element={
            <>
              <Helmet>
                <title>IT Recruitment | GETITT - Technology Staffing Solutions</title>
                <meta name="description" content="Specialized IT recruitment services for tech companies. Find skilled developers, engineers, and IT professionals across India." />
                <link rel="canonical" href="https://getittjobs.com/industries/it" />
              </Helmet>
              <ITIndustry />
            </>
          } />
          <Route path="/industries/banking" element={
            <>
              <Helmet>
                <title>Banking & Finance Recruitment | GETITT</title>
                <meta name="description" content="Expert recruitment solutions for banking and financial services. Connect with qualified finance professionals and banking experts." />
                <link rel="canonical" href="https://getittjobs.com/industries/banking" />
              </Helmet>
              <BankingIndustry />
            </>
          } />
          <Route path="/industries/retail" element={
            <>
              <Helmet>
                <title>Retail Industry Recruitment | GETITT</title>
                <meta name="description" content="Specialized recruitment solutions for retail and e-commerce. Find experienced retail professionals and management talent." />
                <link rel="canonical" href="https://getittjobs.com/industries/retail" />
              </Helmet>
              <RetailIndustry />
            </>
          } />
          <Route path="/industries/healthcare" element={
            <>
              <Helmet>
                <title>Healthcare Recruitment | GETITT - Medical Staffing</title>
                <meta name="description" content="Healthcare recruitment specialists. Connect with qualified medical professionals, healthcare administrators, and support staff." />
                <link rel="canonical" href="https://getittjobs.com/industries/healthcare" />
              </Helmet>
              <HealthcareIndustry />
            </>
          } />
          <Route path="/industries/manufacturing" element={
            <>
              <Helmet>
                <title>Manufacturing Recruitment | GETITT - Industrial Staffing</title>
                <meta name="description" content="Expert recruitment solutions for the manufacturing sector. Find qualified engineers, technicians, and production professionals." />
                <link rel="canonical" href="https://getittjobs.com/industries/manufacturing" />
              </Helmet>
              <ManufacturingIndustry />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <Helmet>
                <title>Privacy Policy | GETITT</title>
                <meta name="description" content="Read GETITT's privacy policy to understand how we protect your personal information and data privacy rights." />
                <link rel="canonical" href="https://getittjobs.com/privacy-policy" />
              </Helmet>
              <PrivacyPolicy />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <Helmet>
                <title>Terms of Service | GETITT</title>
                <meta name="description" content="Review GETITT's terms of service for information about using our recruitment and staffing services." />
                <link rel="canonical" href="https://getittjobs.com/terms-of-service" />
              </Helmet>
              <TermsOfService />
            </>
          } />
          <Route path="/disclaimer" element={
            <>
              <Helmet>
                <title>Disclaimer | GETITT</title>
                <meta name="description" content="Read GETITT's disclaimer regarding the use of our recruitment services and website information." />
                <link rel="canonical" href="https://getittjobs.com/disclaimer" />
              </Helmet>
              <Disclaimer />
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;