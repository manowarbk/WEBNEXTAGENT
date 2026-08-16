'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../layout/ClientLayout';
import ScrollReveal from '../ui/ScrollReveal';

export default function CTABanner() {
  const { lang } = useLanguage();

  return (
    <section className="cta-section">
      <div className="cta-bg-elements">
        <div className="cta-gradient"></div>
        <div className="cta-mesh"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="cta-content">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="cta-title">
              {lang === 'vi' 
                ? 'Sẵn sàng xây dựng ứng dụng doanh nghiệp nhanh hơn?'
                : 'Ready to build enterprise apps faster?'}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="cta-desc">
              {lang === 'vi'
                ? 'Đội ngũ chuyên gia Next Agent sẵn sàng tư vấn giải pháp Mendix Low-Code phù hợp nhất cho doanh nghiệp của bạn. Đặt lịch ngay — hoàn toàn miễn phí.'
                : 'Our Next Agent experts are ready to consult on the best Mendix Low-Code solution for your business. Book now — completely free.'}
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="cta-actions">
              <Link href="/book-demo" className="btn btn-primary btn-lg">
                {lang === 'vi' ? 'Đặt Lịch Tư Vấn Miễn Phí' : 'Book a Free Consultation'}
                <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="btn btn-ghost btn-lg">
                {lang === 'vi' ? 'Xem Case Studies' : 'View Case Studies'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      
    </section>
  );
}
