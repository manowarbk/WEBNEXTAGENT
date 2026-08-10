import Hero from '@/components/sections/Hero';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import StatsBar from '@/components/sections/StatsBar';
import CaseStudyPreview from '@/components/sections/CaseStudyPreview';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsGrid />
      <IndustriesGrid />
      <StatsBar />
      <CaseStudyPreview />
      <CTABanner />
    </>
  );
}
