import { caseStudies } from '@/data/case-studies';
import CaseStudyDetailClient from './CaseStudyDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) return { title: 'Case Study Not Found | NextAgent' };
  
  return {
    title: `${caseStudy.titleVi} | NextAgent Case Study`,
    description: caseStudy.descVi,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetailClient caseStudy={caseStudy} />;
}
