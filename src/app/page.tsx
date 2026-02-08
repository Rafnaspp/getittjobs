import Hero from '@/components/home/Hero'
import RecruitmentKit from '@/components/home/RecruitmentKit'
import Services from '@/components/home/Services'
import Industries from '@/components/home/Industries'
import JobCategories from '@/components/home/JobCategories'
import ProcessSteps from '@/components/home/ProcessSteps'
import GrowthMetrics from '@/components/home/GrowthMetrics'
// import CallToAction from '@/components/home/CallToAction'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GETITT - Leading Recruitment & Staffing Solutions in India',
  description: 'GETITT is India\'s premier recruitment and staffing consultancy, offering fast-track talent solutions across IT, Banking, Healthcare, and Manufacturing sectors.',
  alternates: {
    canonical: 'https://getittjobs.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecruitmentKit />
      <Services />
      <ProcessSteps />
      <JobCategories />
      <Industries />
      <GrowthMetrics />
      {/* <CallToAction /> */}
    </>
  )
}
