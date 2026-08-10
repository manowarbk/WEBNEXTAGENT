'use client';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../layout/ClientLayout';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  const { lang } = useLanguage();

  const content = {
    vi: {
      eyebrow: 'Mendix-Powered Solutions Provider',
      title: 'Tăng tốc Chuyển đổi số với',
      titleHighlight: 'Mendix Low-Code',
      subtitle: 'Từ ý tưởng đến ứng dụng chỉ trong vài tuần — Đội ngũ Next Agent giúp doanh nghiệp Việt Nam xây dựng hệ thống quản trị thông minh, tối ưu chuỗi cung ứng và số hoá toàn diện quy trình vận hành.',
      primaryCTA: 'Đặt Lịch Tư Vấn',
      secondaryCTA: 'Khám Phá Giải Pháp',
    },
    en: {
      eyebrow: 'Mendix-Powered Solutions Provider',
      title: 'Accelerate Digital Transformation with',
      titleHighlight: 'Mendix Low-Code Platform',
      subtitle: 'From idea to application in just weeks — Next Agent helps Vietnamese enterprises build intelligent management systems, optimize supply chains, and fully digitize business operations.',
      primaryCTA: 'Book a Consultation',
      secondaryCTA: 'Explore Solutions',
    },
  };

  const c = content[lang];

  return (
    <section className="hero-section noise-overlay">
      <div className="hero-bg-elements">
        <div className="hero-mesh"></div>
      </div>
      
      <div className="container relative" style={{ zIndex: 10 }}>
        <div className="hero-content">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-eyebrow">{c.eyebrow}</div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="hero-title">
              {c.title} <br />
              <span className="gradient-text-mendix">{c.titleHighlight}</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="hero-subtitle">
              {c.subtitle}
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="hero-actions">
              <Link href="/book-demo" className="btn btn-mendix btn-lg">
                {c.primaryCTA}
                <ArrowRight size={18} />
              </Link>
              <Link href="/giai-phap" className="btn btn-ghost btn-lg">
                {c.secondaryCTA}
                <Play size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      
    </section>
  );
}
