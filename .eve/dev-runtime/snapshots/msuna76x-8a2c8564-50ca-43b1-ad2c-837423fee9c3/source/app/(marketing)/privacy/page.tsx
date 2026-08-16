'use client';
import { useLanguage } from '@/components/layout/ClientLayout';

export default function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          {lang === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}
        </h1>
        
        <div className="content-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' ? 'Cập nhật lần cuối: Tháng 8, 2025' : 'Last updated: August 2025'}
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
            {lang === 'vi' ? '1. Thu thập thông tin' : '1. Information Collection'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' 
              ? 'Chúng tôi thu thập thông tin khi bạn đăng ký nhận tư vấn, tải xuống tài liệu hoặc điền vào form liên hệ trên trang web.'
              : 'We collect information when you register for consultation, download materials, or fill out a contact form on the website.'}
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
            {lang === 'vi' ? '2. Sử dụng thông tin' : '2. Use of Information'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' 
              ? 'Thông tin của bạn được sử dụng để cải thiện dịch vụ khách hàng, cá nhân hóa trải nghiệm và liên hệ với bạn.'
              : 'Your information is used to improve customer service, personalize user experience, and contact you.'}
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
            {lang === 'vi' ? '3. Bảo vệ thông tin' : '3. Information Protection'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            {lang === 'vi' 
              ? 'Chúng tôi thực hiện nhiều biện pháp bảo mật để giữ an toàn cho thông tin cá nhân của bạn. Dữ liệu của bạn được lưu trữ trong môi trường an toàn và chỉ có thể truy cập bởi một số ít nhân viên.'
              : 'We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in a secure environment accessible only by a limited number of employees.'}
          </p>
        </div>
      </div>
    </section>
  );
}
