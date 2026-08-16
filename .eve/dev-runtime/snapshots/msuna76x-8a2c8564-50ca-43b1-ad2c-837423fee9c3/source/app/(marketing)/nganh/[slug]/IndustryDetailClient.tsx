'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/components/layout/ClientLayout';
import { Industry } from '@/data/industries';
import { solutions } from '@/data/solutions';

export default function IndustryDetailClient({ industry }: { industry: Industry }) {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)' }}>
        <div className="container">
          <Link href="/nganh" className="back-link">
            <ArrowLeft size={16} />
            {lang === 'vi' ? 'Tất cả các ngành' : 'All Industries'}
          </Link>
          
          <div className="industry-detail-header">
            <div className="industry-icon-large" style={{ backgroundColor: `${industry.color}15`, color: industry.color }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: industry.color, borderRadius: '8px' }}></div>
            </div>
            
            <div className="industry-title-wrap">
              <h1 className="section-title" style={{ marginBottom: '1rem' }}>
                {lang === 'vi' ? industry.titleVi : industry.titleEn}
              </h1>
              <p className="section-subtitle" style={{ maxWidth: '800px', margin: 0 }}>
                {lang === 'vi' ? industry.descVi : industry.descEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry hero image banner */}
      <section style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
        <Image
          src={industry.image}
          alt={lang === 'vi' ? industry.titleVi : industry.titleEn}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          unoptimized
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${industry.color}60 0%, rgba(0,0,0,0.3) 100%)`,
          pointerEvents: 'none',
        }}></div>
      </section>

      <section className="section bg-surface-2">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                {lang === 'vi' ? 'Thách thức thường gặp' : 'Common Pain Points'}
              </h2>
              <ul className="feature-list-large">
                {(lang === 'vi' ? industry.painPointsVi : industry.painPointsEn).map((point, idx) => (
                  <li key={idx} className="feature-item">
                    <AlertTriangle size={24} color={industry.color} className="feature-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div style={{ marginTop: '3rem' }}>
                <Link href="/book-demo" className="btn btn-lg" style={{ backgroundColor: industry.color, color: 'white' }}>
                  {lang === 'vi' ? 'Đăng ký tư vấn' : 'Register for Consultation'}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                {lang === 'vi' ? 'Giải pháp đề xuất' : 'Recommended Solutions'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {industry.solutions.map((solSlug) => {
                  const sol = solutions.find(s => s.slug === solSlug);
                  if (!sol) return null;
                  return (
                    <Link
                      key={sol.slug}
                      href={`/giai-phap/${sol.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.25rem 1.5rem',
                        borderRadius: '12px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-default)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                      className="recommended-solution-card"
                    >
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: sol.color, flexShrink: 0 }}></div>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>
                        {lang === 'vi' ? sol.titleVi : sol.titleEn}
                      </span>
                      <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
