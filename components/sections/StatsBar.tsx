'use client';
import { useLanguage } from '../layout/ClientLayout';
import ScrollReveal from '../ui/ScrollReveal';

export default function StatsBar() {
  const { lang } = useLanguage();

  const stats = [
    { value: '10+', labelVi: 'Năm kinh nghiệm CNTT', labelEn: 'Years of IT Experience' },
    { value: '30+', labelVi: 'Dự án Mendix đã triển khai', labelEn: 'Mendix Projects Delivered' },
    { value: '50+', labelVi: 'Chuyên gia & Kỹ sư', labelEn: 'Engineers & Experts' },
    { value: '99.9%', labelVi: 'Uptime cam kết', labelEn: 'Guaranteed Uptime' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={0.1 * i}>
                <div className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{lang === 'vi' ? stat.labelVi : stat.labelEn}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
