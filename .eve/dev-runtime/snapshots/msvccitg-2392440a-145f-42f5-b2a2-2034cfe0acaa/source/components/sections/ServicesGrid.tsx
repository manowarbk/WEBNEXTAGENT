'use client';
import { useLanguage } from '../layout/ClientLayout';
import { services } from '@/data/services';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Settings, Network, Headset } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Settings,
  Network,
  Headset
};

export default function ServicesGrid() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-surface">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">
              {lang === 'vi' ? 'Dịch Vụ Chuyên Nghiệp' : 'Professional Services'}
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              {lang === 'vi' 
                ? 'Đội ngũ chuyên gia của NextAgent đồng hành cùng bạn trên mọi chặng đường chuyển đổi số.'
                : 'NextAgent experts accompany you on every step of your digital transformation journey.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-2">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.1 * (idx % 2)}>
                <div className="card hover-lift" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="icon-wrapper" style={{ backgroundColor: `${service.color}15`, color: service.color, flexShrink: 0 }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                        {lang === 'vi' ? service.titleVi : service.titleEn}
                      </h3>
                      <p className="card-desc">
                        {lang === 'vi' ? service.descVi : service.descEn}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem', paddingLeft: '4rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: service.color }}></div>
                          {lang === 'vi' ? f.vi : f.en}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ paddingLeft: '4rem' }}>
                    <Link href={`/dich-vu/${service.slug}`} className="btn-link" style={{ color: service.color }}>
                      {lang === 'vi' ? 'Xem chi tiết' : 'View details'}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
