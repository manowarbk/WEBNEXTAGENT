import { solutions } from '@/data/solutions';
import SolutionDetailClient from './SolutionDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return { title: 'Not Found' };
  
  return {
    title: `${solution.titleVi} | NextAgent Solutions`,
    description: solution.descVi,
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  
  if (!solution) {
    notFound();
  }

  return <SolutionDetailClient solution={solution} />;
}
