'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../layout/ClientLayout';
import { caseStudies } from '@/data/case-studies';
import ScrollReveal from '../ui/ScrollReveal';

export default function CaseStudyPreview() {
  const { lang } = useLanguage();
  // Lấy 2 case studies nổi bật (ví dụ: MYKINGDOM và hệ thống khác)
  const featuredCases = caseStudies.slice(0, 2);

  return (
    <section className="section bg-surface-2" id="case-studies">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header">
            <div className="section-eyebrow">Success Stories</div>
            <h2 className="section-title">
              {lang === 'vi' ? 'Dự án tiêu biểu' : 'Featured Case Studies'}
            </h2>
            <div className="flex items-end justify-between">
              <p className="section-subtitle" style={{ margin: 0, maxWidth: '600px' }}>
                {lang === 'vi'
                  ? 'Khám phá cách NextAgent giúp các doanh nghiệp hàng đầu chuyển đổi số thành công và tối ưu vận hành.'
                  : 'Discover how NextAgent helps leading enterprises succeed in digital transformation and optimize operations.'}
              </p>
              <Link href="/case-studies" className="btn btn-ghost hidden-mobile">
                {lang === 'vi' ? 'Xem tất cả' : 'View all'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="cs-grid">
          {featuredCases.map((cs, index) => (
            <ScrollReveal key={cs.slug} direction="up" delay={0.2 + (0.1 * index)}>
              <div className="cs-card">
                <div className="cs-image-wrap">
                  <div className="cs-image" style={{ backgroundImage: `url(${cs.image})` }}></div>
                  <div className="cs-tags">
                    <span className="cs-tag">{lang === 'vi' ? cs.tagVi : cs.tagEn}</span>
                  </div>
                </div>
                <div className="cs-content">
                  <div className="cs-client">{cs.client}</div>
                  <h3 className="cs-title">{lang === 'vi' ? cs.titleVi : cs.titleEn}</h3>
                  
                  <div className="cs-metrics">
                    {cs.results.map((m, i) => (
                      <div key={i} className="cs-metric">
                        <div className="cs-metric-val">{m.value}</div>
                        <div className="cs-metric-label">{lang === 'vi' ? m.metricVi : m.metricEn}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${cs.slug}`} className="cs-link">
                    {lang === 'vi' ? 'Đọc Case Study' : 'Read Case Study'}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mobile-only mt-8 text-center">
          <Link href="/case-studies" className="btn btn-ghost">
            {lang === 'vi' ? 'Xem tất cả' : 'View all'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      
    </section>
  );
}
