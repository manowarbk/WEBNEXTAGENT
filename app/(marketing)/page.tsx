import Hero from '@/components/sections/Hero';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ProcessFlow from '@/components/sections/ProcessFlow';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import StatsBar from '@/components/sections/StatsBar';
import CaseStudyPreview from '@/components/sections/CaseStudyPreview';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SolutionsGrid />
      <ProcessFlow />
      <IndustriesGrid />
      <CaseStudyPreview />
      <CTABanner />
    </>
  );
}
