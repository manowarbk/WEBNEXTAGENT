'use client';
import { useLanguage } from '../layout/ClientLayout';
import { industries } from '@/data/industries';
import Link from 'next/link';
import { ArrowRight, Store, Network, Factory, ShoppingBag } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store size={24} />,
  Network: <Network size={24} />,
  Factory: <Factory size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
};

export default function IndustriesGrid() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-base" id="industries">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header">
            <div className="section-eyebrow">Industries</div>
            <h2 className="section-title">
              {lang === 'vi' ? 'Giải pháp theo ngành' : 'Industry Solutions'}
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              {lang === 'vi' 
                ? 'Tùy biến cho từng đặc thù nghiệp vụ'
                : 'Customized for specific business domains'}
            </p>
          </div>
        </ScrollReveal>

        <div className="industry-grid">
          {industries.map((ind, index) => (
            <ScrollReveal key={ind.slug} direction="up" delay={0.1 * (index % 4)}>
              <Link href={`/nganh/${ind.slug}`} className="industry-card">
                <div className="industry-bg" style={{ backgroundImage: `url(${ind.image})` }}>
                  <div className="industry-overlay"></div>
                </div>
                <div className="industry-content">
                  <div className="industry-icon">
                    {iconMap[ind.icon]}
                  </div>
                  <h3 className="industry-title">{lang === 'vi' ? ind.titleVi : ind.titleEn}</h3>
                  <p className="industry-desc">{lang === 'vi' ? ind.descVi : ind.descEn}</p>
                  <div className="industry-cta">
                    <span>{lang === 'vi' ? 'Xem chi tiết' : 'View Details'}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      
    </section>
  );
}
