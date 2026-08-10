'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/layout/ClientLayout';
import { Service } from '@/data/services';

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)' }}>
        <div className="container">
          <Link href="/dich-vu" className="back-link">
            <ArrowLeft size={16} />
            {lang === 'vi' ? 'Tất cả dịch vụ' : 'All Services'}
          </Link>
          
          <div className="service-detail-header">
            <div className="service-icon-large" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: service.color, borderRadius: '8px' }}></div>
            </div>
            
            <div className="service-title-wrap">
              <h1 className="section-title" style={{ marginBottom: '1rem' }}>
                {lang === 'vi' ? service.titleVi : service.titleEn}
              </h1>
              <p className="section-subtitle" style={{ maxWidth: '800px', margin: 0 }}>
                {lang === 'vi' ? service.descVi : service.descEn}
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
                {lang === 'vi' ? 'Nội dung chi tiết' : 'Service Details'}
              </h2>
              <ul className="feature-list-large">
                {service.features.map((f, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircle2 size={24} color={service.color} className="feature-icon" />
                    <span>{lang === 'vi' ? f.vi : f.en}</span>
                  </li>
                ))}
              </ul>
              
              <div style={{ marginTop: '3rem' }}>
                <Link href="/book-demo" className="btn btn-lg" style={{ backgroundColor: service.color, color: 'white' }}>
                  {lang === 'vi' ? 'Yêu cầu tư vấn' : 'Request Consultation'}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="service-illustration">
              <div style={{
                position: 'relative',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                aspectRatio: '4/3',
              }}>
                <Image
                  src={service.image}
                  alt={lang === 'vi' ? service.titleVi : service.titleEn}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${service.color}30 0%, transparent 60%)`,
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
