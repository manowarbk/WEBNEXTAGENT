'use client';
import { useLanguage } from '../layout/ClientLayout';
import ScrollReveal from '../ui/ScrollReveal';
import { Users, Zap, GitMerge, Rocket } from 'lucide-react';

export default function ProcessFlow() {
  const { lang } = useLanguage();

  const steps = [
    {
      icon: <Users size={28} />,
      titleVi: "1. Đồng sáng tạo (BizDevOps)",
      titleEn: "1. BizDevOps Co-Creation",
      descVi: "Xoá bỏ rào cản giữa Nghiệp vụ & Công nghệ. Khách hàng và kỹ sư Next Agent cùng thảo luận trực quan trên mô hình thực tế ngay từ ngày đầu.",
      descEn: "Bridge the gap between Business & IT. Clients and Next Agent engineers collaborate directly on visual models from day one."
    },
    {
      icon: <Zap size={28} />,
      titleVi: "2. Phát triển Low-Code",
      titleEn: "2. Low-Code Modeling",
      descVi: "Xây dựng ứng dụng nhanh gấp 10 lần bằng nền tảng Mendix trực quan, tự động sinh mã nguồn chất lượng cao mà không gặp nút thắt kỹ thuật.",
      descEn: "Develop apps 10x faster using the visual Mendix modeler, generating high-quality enterprise-ready code without coding bottlenecks."
    },
    {
      icon: <GitMerge size={28} />,
      titleVi: "3. Tích hợp Hệ thống",
      titleEn: "3. Enterprise Integration",
      descVi: "Kết nối liền mạch với hệ thống lõi ERP (SAP, MS Dynamics, MISA), CRM, ngân hàng và các nguồn dữ liệu thông qua kiến trúc microservices.",
      descEn: "Connect seamlessly to core systems (SAP, MS Dynamics, MISA), CRM, banks, and other data sources via microservices architecture."
    },
    {
      icon: <Rocket size={28} />,
      titleVi: "4. Vận hành & Mở rộng",
      titleEn: "4. Deploy & Scale",
      descVi: "Triển khai một chạm (One-click deployment) lên Cloud hoặc Hybrid Cloud, đảm bảo tính bảo mật tuyệt đối, sẵn sàng mở rộng quy mô lớn.",
      descEn: "One-click deployment to Cloud or Hybrid Cloud, ensuring top-tier enterprise security and infinite scalability."
    }
  ];

  return (
    <section className="section bg-surface-2" id="process">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header centered">
            <div className="section-eyebrow">{lang === 'vi' ? 'Quy trình triển khai' : 'Implementation Process'}</div>
            <h2 className="section-title">
              {lang === 'vi' ? 'Đưa ứng dụng từ ý tưởng đến thực tế nhanh gấp 10 lần' : 'Bring Ideas to Life 10x Faster'}
            </h2>
            <p className="section-subtitle">
              {lang === 'vi' 
                ? 'Phương pháp phát triển Low-Code chuẩn BizDevOps giúp doanh nghiệp số hoá quy trình một cách toàn diện và chính xác.'
                : 'Our BizDevOps low-code methodology ensures comprehensive and accurate digitization for your business.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <div className="process-step-card">
                <div className="process-icon-wrap">
                  {step.icon}
                  <span className="step-number-badge">{idx + 1}</span>
                </div>
                <h3 className="process-step-title">
                  {lang === 'vi' ? step.titleVi : step.titleEn}
                </h3>
                <p className="process-step-desc">
                  {lang === 'vi' ? step.descVi : step.descEn}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
