'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/layout/ClientLayout';
import { Solution } from '@/data/solutions';

export default function SolutionDetailClient({ solution }: { solution: Solution }) {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)' }}>
        <div className="container">
          <Link href="/giai-phap" className="back-link">
            <ArrowLeft size={16} />
            {lang === 'vi' ? 'Tất cả giải pháp' : 'All Solutions'}
          </Link>
          
          <div className="solution-detail-header">
            <div className="solution-icon-large" style={{ backgroundColor: `${solution.color}15`, color: solution.color }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: solution.color, borderRadius: '8px' }}></div>
            </div>
            
            <div className="solution-title-wrap">
              <h1 className="section-title" style={{ marginBottom: '1rem' }}>
                {lang === 'vi' ? solution.titleVi : solution.titleEn}
              </h1>
              <p className="section-subtitle" style={{ maxWidth: '800px', margin: 0 }}>
                {lang === 'vi' ? solution.descVi : solution.descEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-2">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                {lang === 'vi' ? 'Tính năng nổi bật' : 'Key Features'}
              </h2>
              <ul className="feature-list-large">
                {solution.features.map((f, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircle2 size={24} color={solution.color} className="feature-icon" />
                    <span>{lang === 'vi' ? f.vi : f.en}</span>
                  </li>
                ))}
              </ul>
              
              <div style={{ marginTop: '3rem' }}>
                <Link href="/book-demo" className="btn btn-lg" style={{ backgroundColor: solution.color, color: 'white' }}>
                  {lang === 'vi' ? solution.ctaVi : solution.ctaEn}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="solution-illustration">
              <div style={{
                position: 'relative',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                aspectRatio: '4/3',
              }}>
                <Image
                  src={solution.image}
                  alt={lang === 'vi' ? solution.titleVi : solution.titleEn}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${solution.color}30 0%, transparent 60%)`,
                  pointerEvents: 'none',
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
