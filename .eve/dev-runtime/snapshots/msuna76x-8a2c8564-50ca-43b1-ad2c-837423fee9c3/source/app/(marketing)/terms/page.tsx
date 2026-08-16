'use client';
import { useLanguage } from '@/components/layout/ClientLayout';

export default function TermsPage() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          {lang === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service'}
        </h1>
        
        <div className="content-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' ? 'Cập nhật lần cuối: Tháng 8, 2025' : 'Last updated: August 2025'}
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
            {lang === 'vi' ? '1. Chấp nhận điều khoản' : '1. Acceptance of Terms'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' 
              ? 'Bằng cách truy cập và sử dụng trang web của NEXT AGENT, bạn đồng ý tuân thủ các Điều khoản dịch vụ này.'
              : 'By accessing and using the NEXT AGENT website, you agree to comply with these Terms of Service.'}
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
            {lang === 'vi' ? '2. Sở hữu trí tuệ' : '2. Intellectual Property'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' 
              ? 'Tất cả nội dung, bao gồm văn bản, đồ họa, logo, và phần mềm trên trang web này là tài sản của NEXT AGENT hoặc các đối tác của chúng tôi.'
              : 'All content, including text, graphics, logos, and software on this website is the property of NEXT AGENT or our partners.'}
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
            {lang === 'vi' ? '3. Miễn trừ trách nhiệm' : '3. Disclaimer'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' 
              ? 'Nội dung trên trang web này được cung cấp cho mục đích thông tin chung. Chúng tôi không đảm bảo tính chính xác tuyệt đối và có thể thay đổi nội dung mà không cần báo trước.'
              : 'The content on this website is provided for general informational purposes. We do not guarantee absolute accuracy and may change content without prior notice.'}
          </p>
        </div>
      </div>
    </section>
  );
}
