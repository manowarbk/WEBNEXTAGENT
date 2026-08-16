'use client';
import { useLanguage } from '@/components/layout/ClientLayout';
import SolutionsGrid from '@/components/sections/SolutionsGrid';

export default function SolutionsPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">
              {lang === 'vi' ? 'Hệ Sinh Thái Giải Pháp' : 'Solution Ecosystem'}
            </h1>
            <p className="section-subtitle">
              {lang === 'vi' 
                ? 'Kiến tạo lợi thế cạnh tranh với bộ giải pháp chuyển đổi số toàn diện từ NEXT AGENT, được thiết kế riêng cho đặc thù doanh nghiệp Việt Nam.'
                : 'Create competitive advantage with comprehensive digital transformation solutions from NEXT AGENT, tailored for Vietnamese enterprises.'}
            </p>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '-4rem' }}>
        <SolutionsGrid />
      </div>
    </>
  );
}
