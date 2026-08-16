'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Zap, Store, TrendingDown, DollarSign } from 'lucide-react';
import { useLanguage } from '@/components/layout/ClientLayout';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  const { lang } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock size={20} />;
      case 'CheckCircle': return <CheckCircle size={20} />;
      case 'TrendingUp': return <TrendingUp size={20} />;
      case 'Store': return <Store size={20} />;
      case 'TrendingDown': return <TrendingDown size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'DollarSign': return <DollarSign size={20} />;
      default: return <CheckCircle size={20} />;
    }
  };

  return (
    <>
      {/* Header */}
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: 'rgba(0, 212, 170, 0.1)',
              color: 'var(--accent-primary)',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              Case Studies
            </div>
            <h1 className="section-title">
              {lang === 'vi' ? 'Câu Chuyện Thành Công' : 'Client Success Stories'}
            </h1>
            <p className="section-subtitle">
              {lang === 'vi' 
                ? 'Khám phá cách NEXT AGENT đồng hành cùng các doanh nghiệp Việt Nam hiện đại hóa hạ tầng, tối ưu vận hành và bứt phá tăng trưởng.'
                : 'Discover how NEXT AGENT partners with Vietnamese enterprises to modernize infrastructure, optimize operations, and achieve breakthrough growth.'}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-surface-2" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '16px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 0,
                  border: '1px solid var(--border-subtle)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ position: 'relative', minHeight: '300px', width: '100%' }}>
                  <Image
                    src={cs.image}
                    alt={lang === 'vi' ? cs.titleVi : cs.titleEn}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#00D4AA',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    {lang === 'vi' ? cs.tagVi : cs.tagEn}
                  </div>
                </div>

                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                      {cs.client}
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.35 }}>
                      {lang === 'vi' ? cs.titleVi : cs.titleEn}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {lang === 'vi' ? cs.descVi : cs.descEn}
                    </p>

                    {/* Highlights Metrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                      {cs.results.slice(0, 2).map((res, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-base)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                          <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {getIcon(res.icon)}
                            {res.value}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                            {lang === 'vi' ? res.metricVi : res.metricEn}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/case-studies/${cs.slug}`} className="btn btn-primary" style={{ width: 'fit-content' }}>
                    {lang === 'vi' ? 'Xem chi tiết Case Study' : 'Read Full Case Study'}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
