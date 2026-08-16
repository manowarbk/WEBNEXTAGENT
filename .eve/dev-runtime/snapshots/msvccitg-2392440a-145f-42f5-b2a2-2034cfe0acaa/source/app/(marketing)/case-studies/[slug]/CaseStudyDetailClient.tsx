'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Clock, TrendingUp, Zap, Store, TrendingDown, DollarSign } from 'lucide-react';
import { useLanguage } from '@/components/layout/ClientLayout';
import { CaseStudy } from '@/data/case-studies';

export default function CaseStudyDetailClient({ caseStudy }: { caseStudy: CaseStudy }) {
  const { lang } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock size={24} />;
      case 'CheckCircle': return <CheckCircle2 size={24} />;
      case 'TrendingUp': return <TrendingUp size={24} />;
      case 'Store': return <Store size={24} />;
      case 'TrendingDown': return <TrendingDown size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'DollarSign': return <DollarSign size={24} />;
      default: return <CheckCircle2 size={24} />;
    }
  };

  return (
    <>
      {/* Header / Hero */}
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <Link href="/case-studies" className="back-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            <ArrowLeft size={16} />
            {lang === 'vi' ? 'Tất cả Case Studies' : 'All Case Studies'}
          </Link>
          
          <div style={{ maxWidth: '900px' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.35rem 0.85rem',
              background: 'rgba(0, 212, 170, 0.1)',
              color: 'var(--accent-primary)',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              {lang === 'vi' ? caseStudy.tagVi : caseStudy.tagEn}
            </div>

            <h1 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', lineHeight: 1.25, marginBottom: '1.5rem' }}>
              {lang === 'vi' ? caseStudy.titleVi : caseStudy.titleEn}
            </h1>

            <p className="section-subtitle" style={{ textAlign: 'left', fontSize: '1.15rem', lineHeight: 1.6, margin: 0, color: 'var(--text-secondary)' }}>
              {lang === 'vi' ? caseStudy.descVi : caseStudy.descEn}
            </p>
          </div>
        </div>
      </section>

      {/* Info Bar & Hero Image */}
      <section className="section bg-surface-2" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            marginBottom: '3rem'
          }}>
            <Image
              src={caseStudy.image}
              alt={lang === 'vi' ? caseStudy.titleVi : caseStudy.titleEn}
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              priority
              unoptimized
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              color: 'white',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              padding: '1.25rem 2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8, letterSpacing: '0.05em' }}>
                  {lang === 'vi' ? 'Khách hàng' : 'Client'}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: '0.2rem' }}>{caseStudy.client}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8, letterSpacing: '0.05em' }}>
                  {lang === 'vi' ? 'Lĩnh vực' : 'Industry'}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: '0.2rem' }}>
                  {lang === 'vi' ? 'Bán lẻ / Phân phối đa kênh' : 'Retail / Omnichannel Distribution'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8, letterSpacing: '0.05em' }}>
                  {lang === 'vi' ? 'Mô hình hợp tác' : 'Engagement Model'}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: '0.2rem' }}>Managed IT & AI Consulting</div>
              </div>
            </div>
          </div>

          {/* Results Stat Cards Grid */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '2rem', textAlign: 'center' }}>
              {lang === 'vi' ? 'Kết Quả Đạt Được' : 'Key Measured Results'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="card text-center" style={{ padding: '2rem 1.5rem', background: 'var(--bg-base)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(0, 212, 170, 0.1)',
                    color: 'var(--accent-primary)',
                    marginBottom: '1rem'
                  }}>
                    {getIcon(res.icon)}
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>
                    {res.value}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                    {lang === 'vi' ? res.metricVi : res.metricEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'stretch', marginBottom: '4rem' }}>
            {/* Challenge Card */}
            <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-base)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>
                  <AlertTriangle size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                  {lang === 'vi' ? 'Thách Thức Ban Đầu' : 'The Challenge'}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {lang === 'vi' ? caseStudy.challengeVi : caseStudy.challengeEn}
              </p>
              {caseStudy.challengePointsVi && (
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                  {(lang === 'vi' ? caseStudy.challengePointsVi : caseStudy.challengePointsEn)?.map((pt, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#EF4444', fontWeight: 'bold', marginTop: '0.1rem' }}>•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Solution Card */}
            <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-base)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(0, 212, 170, 0.1)', color: 'var(--accent-primary)' }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                  {lang === 'vi' ? 'Giải Pháp Từ Next Agent' : 'Next Agent Solution'}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {lang === 'vi' ? caseStudy.solutionVi : caseStudy.solutionEn}
              </p>
              {caseStudy.solutionPointsVi && (
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingLeft: 0, listStyle: 'none' }}>
                  {(lang === 'vi' ? caseStudy.solutionPointsVi : caseStudy.solutionPointsEn)?.map((pt, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '0.925rem', lineHeight: 1.5 }}>
                      <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Expansion / Upsell Section (if available) */}
          {caseStudy.expansionStoryVi && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(8, 135, 201, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
              border: '1px solid rgba(8, 135, 201, 0.2)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              marginBottom: '4rem'
            }}>
              <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  background: '#0887C9',
                  color: 'white',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {lang === 'vi' ? 'Mở Rộng Hợp Tác Dài Hạn' : 'Long-term Strategic Expansion'}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {lang === 'vi' ? caseStudy.expansionStoryVi.title : caseStudy.expansionStoryEn?.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {lang === 'vi' ? caseStudy.expansionStoryVi.desc : caseStudy.expansionStoryEn?.desc}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', textAlign: 'left' }}>
                  {(lang === 'vi' ? caseStudy.expansionStoryVi.points : caseStudy.expansionStoryEn?.points)?.map((pt, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-base)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.5rem' }}></div>
                      <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Testimonial Quote */}
          {caseStudy.testimonial && (
            <div style={{
              background: 'var(--bg-base)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              textAlign: 'center',
              maxWidth: '850px',
              margin: '0 auto 4rem auto',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '3rem', color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'serif' }}>“</div>
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                "{lang === 'vi' ? caseStudy.testimonial.quoteVi : caseStudy.testimonial.quoteEn}"
              </p>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                {caseStudy.testimonial.author}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {caseStudy.testimonial.position}
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="text-center" style={{ background: 'var(--bg-base)', padding: '3.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {lang === 'vi' ? 'Sẵn sàng hiện đại hóa hệ thống CNTT của bạn?' : 'Ready to modernize your IT infrastructure?'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
              {lang === 'vi'
                ? 'Next Agent Tech đồng hành cùng doanh nghiệp từ vận hành ổn định đến chuyển đổi số và ứng dụng AI chuyên sâu.'
                : 'Next Agent Tech accompanies businesses from stable operations to digital transformation and advanced AI integration.'}
            </p>
            <Link href="/book-demo" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {lang === 'vi' ? 'Liên hệ tư vấn miễn phí' : 'Contact for Free Consultation'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
