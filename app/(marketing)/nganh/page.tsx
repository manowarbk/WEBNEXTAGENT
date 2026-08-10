'use client';
import { useLanguage } from '@/components/layout/ClientLayout';
import IndustriesGrid from '@/components/sections/IndustriesGrid';

export default function IndustriesPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">
              {lang === 'vi' ? 'Giải Pháp Theo Ngành' : 'Industry Solutions'}
            </h1>
            <p className="section-subtitle">
              {lang === 'vi' 
                ? 'Kinh nghiệm triển khai thực tế sâu rộng, thiết kế giải pháp may đo riêng cho từng bài toán đặc thù của các nhóm ngành.'
                : 'Extensive practical implementation experience, designing tailor-made solutions for the specific problems of each industry group.'}
            </p>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '-4rem' }}>
        <IndustriesGrid />
      </div>
    </>
  );
}
