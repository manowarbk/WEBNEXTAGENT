'use client';
import { useState } from 'react';
import { useLanguage } from '@/components/layout/ClientLayout';
import { Mail, MapPin, Phone, Send, Building, User, FileText, CheckCircle2 } from 'lucide-react';
import { solutions } from '@/data/solutions';

export default function BookDemoPage() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
        // Reset form
        e.currentTarget.reset();
      } else {
        alert(lang === 'vi' ? 'Có lỗi xảy ra, vui lòng thử lại sau.' : 'Something went wrong, please try again later.');
      }
    } catch (error) {
      alert(lang === 'vi' ? 'Có lỗi xảy ra, vui lòng thử lại sau.' : 'Something went wrong, please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', minHeight: '100vh' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Left Column: Info & Trust */}
          <div>
            <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              {lang === 'vi' ? 'Sẵn sàng chuyển đổi số cùng NEXT AGENT?' : 'Ready to digitize with NEXT AGENT?'}
            </h1>
            <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '3rem' }}>
              {lang === 'vi' 
                ? 'Để lại thông tin và đội ngũ chuyên gia của chúng tôi sẽ liên hệ tư vấn lộ trình phù hợp nhất cho doanh nghiệp của bạn trong vòng 24 giờ.'
                : 'Leave your information and our experts will contact you to advise on the most suitable roadmap for your business within 24 hours.'}
            </p>

            <div className="contact-info-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {lang === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
              </h3>
              
              <div className="contact-item">
                <div className="contact-icon"><Building size={20} /></div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>CÔNG TY TNHH CÔNG NGHỆ NEXT AGENT</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>NEXT AGENT TECH CO., LTD</div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {lang === 'vi' 
                    ? '59/146/4/5, Đường 102, Phường Tăng Nhơn Phú, TP Hồ Chí Minh' 
                    : '59/146/4/5, Duong 102, Tang Nhon Phu Ward, Ho Chi Minh City'}
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <a href="mailto:contact@nextagent.com.vn" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                  contact@nextagent.com.vn
                </a>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <a href="tel:+84902770989" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  +84 902 770 989
                </a>
              </div>
            </div>

            {/* Mendix Partner Badge equivalent */}
            <div className="partner-badge-card" style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', background: '#0887C9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>M</div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Mendix-Powered Solutions Provider</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Mendix Consulting & Implementation Services</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Mendix Application Modernization Partner</div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                {lang === 'vi' ? 'Đối tác chính thức của Mendix tại Việt Nam, triển khai giải pháp số cấp doanh nghiệp nhanh gấp 10 lần.' : 'Official Mendix Partner in Vietnam, deploying enterprise-grade digital solutions 10x faster.'}
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="form-card">
            {submitted ? (
              <div className="success-message">
                <CheckCircle2 size={48} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {lang === 'vi' ? 'Gửi thành công!' : 'Submitted successfully!'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                  {lang === 'vi' 
                    ? 'Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.' 
                    : 'Thank you for your interest. We will contact you as soon as possible.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="demo-form">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                  {lang === 'vi' ? 'Yêu cầu Demo / Tư vấn' : 'Request Demo / Consultation'}
                </h2>
                
                <div className="form-group">
                  <label htmlFor="name">{lang === 'vi' ? 'Họ và Tên *' : 'Full Name *'}</label>
                  <div className="input-with-icon">
                    <User size={18} className="input-icon" />
                    <input type="text" id="name" name="name" required placeholder={lang === 'vi' ? 'Nhập họ tên...' : 'Enter your name...'} disabled={isSubmitting} />
                  </div>
                </div>
                
                <div className="grid-2-form">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input type="email" id="email" name="email" required placeholder="name@company.com" disabled={isSubmitting} />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">{lang === 'vi' ? 'Số điện thoại *' : 'Phone Number *'}</label>
                    <div className="input-with-icon">
                      <Phone size={18} className="input-icon" />
                      <input type="tel" id="phone" name="phone" required placeholder={lang === 'vi' ? 'Nhập số điện thoại...' : 'Enter phone number...'} disabled={isSubmitting} />
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">{lang === 'vi' ? 'Tên công ty' : 'Company Name'}</label>
                  <div className="input-with-icon">
                    <Building size={18} className="input-icon" />
                    <input type="text" id="company" name="company" placeholder={lang === 'vi' ? 'Nhập tên công ty...' : 'Enter company name...'} disabled={isSubmitting} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">{lang === 'vi' ? 'Giải pháp quan tâm' : 'Solution of Interest'}</label>
                  <select id="interest" name="interest" className="form-select" defaultValue="" disabled={isSubmitting}>
                    <option value="" disabled>{lang === 'vi' ? 'Chọn giải pháp...' : 'Select a solution...'}</option>
                    {solutions.map(sol => (
                      <option key={sol.slug} value={sol.slug}>
                        {lang === 'vi' ? sol.titleVi : sol.titleEn}
                      </option>
                    ))}
                    <option value="other">{lang === 'vi' ? 'Khác (Tư vấn tổng thể)' : 'Other (General Consultation)'}</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{lang === 'vi' ? 'Mô tả nhu cầu của bạn' : 'Describe your needs'}</label>
                  <div className="input-with-icon align-top">
                    <FileText size={18} className="input-icon" style={{ marginTop: '0.8rem' }} />
                    <textarea id="message" name="message" rows={4} placeholder={lang === 'vi' ? 'Nhập chi tiết yêu cầu của doanh nghiệp...' : 'Enter your business requirements in detail...'} disabled={isSubmitting}></textarea>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }} disabled={isSubmitting}>
                  {isSubmitting 
                    ? (lang === 'vi' ? 'Đang gửi...' : 'Submitting...')
                    : (lang === 'vi' ? 'Gửi Yêu Cầu' : 'Submit Request')
                  }
                  {!isSubmitting && <Send size={18} />}
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                  {lang === 'vi' ? '* Thông tin của bạn được bảo mật tuyệt đối.' : '* Your information is strictly confidential.'}
                </p>
              </form>
            )}
          </div>
          
        </div>
      </div>

      
    </section>
  );
}
