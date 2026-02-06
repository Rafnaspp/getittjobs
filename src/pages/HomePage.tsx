import React from 'react';
import Hero from '../components/home/Hero';
import RecruitmentKit from '../components/home/RecruitmentKit';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import JobCategories from '../components/home/JobCategories';
import ProcessSteps from '../components/home/ProcessSteps';
import GrowthMetrics from '../components/home/GrowthMetrics';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <RecruitmentKit />
      <Services />
      <ProcessSteps />
      <JobCategories />
      <Industries />
      <GrowthMetrics />
      <CallToAction />
    </>
  );
};

export default HomePage;