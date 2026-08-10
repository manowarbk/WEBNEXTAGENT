'use client';
import { useLanguage } from '@/components/layout/ClientLayout';
import Link from 'next/link';

export default function ResourcesPage() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          {lang === 'vi' ? 'Tài nguyên & Tài liệu' : 'Resources & Documents'}
        </h1>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {lang === 'vi' 
            ? 'Khám phá các tài liệu, e-books và báo cáo chuyên sâu về chuyển đổi số.'
            : 'Explore our documents, e-books, and in-depth reports on digital transformation.'}
        </p>

        <div className="grid-3">
          {/* Placeholder items */}
          <div className="card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {lang === 'vi' ? 'Cẩm nang Chuyển đổi số 2025' : 'Digital Transformation Handbook 2025'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {lang === 'vi' 
                ? 'Hướng dẫn toàn diện cho doanh nghiệp bán lẻ.'
                : 'Comprehensive guide for retail businesses.'}
            </p>
            <Link href="#" className="btn btn-outline" style={{ display: 'inline-flex' }}>
              {lang === 'vi' ? 'Tải xuống (PDF)' : 'Download (PDF)'}
            </Link>
          </div>
          
          <div className="card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {lang === 'vi' ? 'Báo cáo ngành Bán lẻ' : 'Retail Industry Report'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {lang === 'vi' 
                ? 'Phân tích xu hướng tiêu dùng và công nghệ.'
                : 'Analysis of consumer and technology trends.'}
            </p>
            <Link href="#" className="btn btn-outline" style={{ display: 'inline-flex' }}>
              {lang === 'vi' ? 'Tải xuống (PDF)' : 'Download (PDF)'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
