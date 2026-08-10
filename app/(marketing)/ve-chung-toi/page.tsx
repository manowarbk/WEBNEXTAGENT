'use client';
import { useLanguage } from '@/components/layout/ClientLayout';
import { Users, Target, Rocket, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { lang } = useLanguage();

  const coreValues = [
    {
      icon: <Rocket size={24} />,
      titleVi: 'Tốc độ (Speed)',
      titleEn: 'Speed',
      descVi: 'Cam kết triển khai giải pháp với tốc độ vượt trội thông qua nền tảng Low-code và các công cụ tự động hóa.',
      descEn: 'Committed to deploying solutions with outstanding speed through Low-code platforms and automation tools.'
    },
    {
      icon: <ShieldCheck size={24} />,
      titleVi: 'Tin cậy (Reliability)',
      titleEn: 'Reliability',
      descVi: 'Hệ thống vận hành bền bỉ, bảo mật dữ liệu cấp doanh nghiệp và đồng hành hỗ trợ lâu dài.',
      descEn: 'Durable operating systems, enterprise-grade data security and long-term support.'
    },
    {
      icon: <Zap size={24} />,
      titleVi: 'Đổi mới (Innovation)',
      titleEn: 'Innovation',
      descVi: 'Tiên phong ứng dụng AI Agent và công nghệ mới nhất để tạo ra lợi thế cạnh tranh.',
      descEn: 'Pioneering the application of AI Agents and latest technologies to create competitive advantages.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(0, 212, 170, 0.1)', color: 'var(--accent-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                {lang === 'vi' ? 'Về NEXT AGENT' : 'About NEXT AGENT'}
              </div>
              <h1 className="section-title" style={{ fontSize: '3rem', textAlign: 'left', marginBottom: '1.5rem' }}>
                Your Next Agent for Every Operation.
              </h1>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                {lang === 'vi' 
                  ? 'CÔNG TY TNHH CÔNG NGHỆ NEXT AGENT (NEXT AGENT TECH CO., LTD) tự hào là đơn vị tiên phong cung cấp các giải pháp chuyển đổi số toàn diện, chuyên phát triển ứng dụng trên hệ thống Mendix Low-code platform cùng các dịch vụ AI Agent & Automation.'
                  : 'NEXT AGENT TECHNOLOGY COMPANY LIMITED is proud to be a pioneer providing comprehensive digital transformation solutions, specializing in developing applications on the Mendix Low-code platform and AI Agent & Automation services.'}
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>50+</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{lang === 'vi' ? 'Chuyên gia IT' : 'IT Experts'}</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0887C9', marginBottom: '0.5rem' }}>10x</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{lang === 'vi' ? 'Tốc độ triển khai' : 'Faster delivery'}</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F59E0B', marginBottom: '0.5rem' }}>24/7</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{lang === 'vi' ? 'Hỗ trợ kỹ thuật' : 'Tech Support'}</p>
                </div>
              </div>
            </div>
            
            <div className="about-hero-image">
              <div className="glass-panel" style={{ width: '100%', padding: '2rem', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Vision & Mission</h3>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Target size={24} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {lang === 'vi' ? 'Tầm nhìn: Trở thành đối tác công nghệ số 1 tại Việt Nam về giải pháp Mendix và AI Automation.' : 'Vision: Become the #1 technology partner in Vietnam for Mendix and AI Automation solutions.'}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Users size={24} color="#0887C9" style={{ flexShrink: 0 }} />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {lang === 'vi' ? 'Sứ mệnh: Xóa bỏ rào cản công nghệ, giúp doanh nghiệp tối ưu vận hành và bứt phá tăng trưởng.' : 'Mission: Remove tech barriers, helping businesses optimize operations and breakthrough growth.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glow-orb" style={{ top: '20%', right: '10%' }}></div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">
              {lang === 'vi' ? 'Giá Trị Cốt Lõi' : 'Core Values'}
            </h2>
          </div>
          
          <div className="grid-3">
            {coreValues.map((val, idx) => (
              <div key={idx} className="card text-center" style={{ padding: '2.5rem 2rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg-base)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                  {lang === 'vi' ? val.titleVi : val.titleEn}
                </h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                  {lang === 'vi' ? val.descVi : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mendix Partnership */}
      <section className="section bg-surface-2">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="mendix-showcase" style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, #0887C920 0%, transparent 100%)', borderRadius: '1rem', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#0887C9', marginBottom: '1rem' }}>mendix</div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600 }}>POWERED SOLUTIONS PROVIDER</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                {lang === 'vi' ? 'Chuyên Gia Mendix Tại Việt Nam' : 'Mendix Solutions Specialist'}
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {lang === 'vi' 
                  ? 'NEXT AGENT tập trung phát triển đội ngũ chuyên sâu về Mendix Low-Code và cung cấp các dịch vụ đa dạng từ tư vấn, hiện đại hóa ứng dụng đến tích hợp hệ thống.'
                  : 'NEXT AGENT focuses on developing specialized expertise in Mendix Low-Code, providing a wide range of services from consulting and application modernization to system integration.'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={20} color="#0887C9" />
                  Mendix-Powered Solutions Provider
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={20} color="#0887C9" />
                  Mendix Consulting & Implementation Services
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={20} color="#0887C9" />
                  Mendix Application Modernization Partner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
