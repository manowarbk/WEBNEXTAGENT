import { industries } from '@/data/industries';
import IndustryDetailClient from './IndustryDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: 'Not Found' };
  
  return {
    title: `${industry.titleVi} | NextAgent Industries`,
    description: industry.descVi,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  
  if (!industry) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} />;
}
