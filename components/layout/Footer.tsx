import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Globe, MessageCircle, ArrowRight, Phone } from 'lucide-react';

const content = {
  vi: {
    tagline: 'Your Next Agent for Every Operation.',
    solutions: 'Giải pháp',
    services: 'Dịch vụ',
    industries: 'Ngành',
    company: 'Công ty',
    solutionLinks: [
      { label: 'Mendix Low-Code Platform', href: '/giai-phap/mendix-low-code' },
      { label: 'Giải pháp Supply Chain', href: '/giai-phap/supply-chain-solutions' },
      { label: 'Hệ thống quản lý đánh giá nhân viên 360', href: '/giai-phap/360-kpi-management' },
      { label: 'Công cụ thông minh (Intelligence Tools)', href: '/giai-phap/intelligence-tools' },
    ],
    serviceLinks: [
      { label: 'Tư vấn Chuyển đổi số', href: '/dich-vu/tu-van-chuyen-doi-so' },
      { label: 'Tư vấn & Triển khai ERP', href: '/dich-vu/erp-implementation' },
      { label: 'Kho dữ liệu & Báo cáo thông minh', href: '/dich-vu/datawarehouse-intelligence' },
      { label: 'Tư vấn & Triển khai POS, Loyalty', href: '/dich-vu/pos-loyalty' },
      { label: 'Tích hợp hệ thống', href: '/dich-vu/tich-hop-he-thong' },
    ],
    industryLinks: [
      { label: 'Bán lẻ', href: '/nganh/ban-le' },
      { label: 'Phân phối', href: '/nganh/phan-phoi' },
      { label: 'Sản xuất', href: '/nganh/san-xuat' },
      { label: 'E-commerce', href: '/nganh/e-commerce' },
    ],
    companyLinks: [
      { label: 'Về chúng tôi', href: '/ve-chung-toi' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resources', href: '/resources' },
      { label: 'Liên hệ', href: '/book-demo' },
    ],
    cta: 'Đặt lịch Demo',
    ctaDesc: 'Gặp gỡ chuyên gia và nhận tư vấn miễn phí',
    rights: '© 2025 NEXT AGENT TECHNOLOGY COMPANY LIMITED. All rights reserved.',
    mendixPartner: 'Mendix-Powered Solutions Provider',
    address: '59/146/4/5, Đường 102, Phường Tăng Nhơn Phú, TP Hồ Chí Minh',
  },
  en: {
    tagline: 'Your Next Agent for Every Operation.',
    solutions: 'Solutions',
    services: 'Services',
    industries: 'Industries',
    company: 'Company',
    solutionLinks: [
      { label: 'Mendix Low-Code Platform', href: '/giai-phap/mendix-low-code' },
      { label: 'Supply Chain Solutions', href: '/giai-phap/supply-chain-solutions' },
      { label: '360 Employee Evaluation', href: '/giai-phap/360-kpi-management' },
      { label: 'Intelligence Tools for Business', href: '/giai-phap/intelligence-tools' },
    ],
    serviceLinks: [
      { label: 'Digital Transformation Consulting', href: '/dich-vu/tu-van-chuyen-doi-so' },
      { label: 'ERP Implementation and Consulting', href: '/dich-vu/erp-implementation' },
      { label: 'Datawarehouse and Intelligence Report', href: '/dich-vu/datawarehouse-intelligence' },
      { label: 'POS and Loyalty Implementation', href: '/dich-vu/pos-loyalty' },
      { label: 'System Integration', href: '/dich-vu/tich-hop-he-thong' },
    ],
    industryLinks: [
      { label: 'Retail', href: '/nganh/ban-le' },
      { label: 'Distribution', href: '/nganh/phan-phoi' },
      { label: 'Manufacturing', href: '/nganh/san-xuat' },
      { label: 'E-commerce', href: '/nganh/e-commerce' },
    ],
    companyLinks: [
      { label: 'About Us', href: '/ve-chung-toi' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/book-demo' },
    ],
    cta: 'Book a Demo',
    ctaDesc: 'Meet our experts and get free consultation',
    rights: '© 2025 NEXT AGENT TECHNOLOGY COMPANY LIMITED. All rights reserved.',
    mendixPartner: 'Mendix-Powered Solutions Provider',
    address: '59/146/4/5, Duong 102, Tang Nhon Phu Ward, Ho Chi Minh City',
  },
};

interface FooterProps {
  lang?: 'vi' | 'en';
}

export default function Footer({ lang = 'vi' }: FooterProps) {
  const c = content[lang];
  return (
    <footer className="footer">
      {/* CTA Strip */}
      <div className="footer-cta-strip">
        <div className="container">
          <div className="footer-cta-inner">
            <div>
              <h3 className="footer-cta-title">{c.cta}</h3>
              <p className="footer-cta-desc">{c.ctaDesc}</p>
            </div>
            <Link href="/book-demo" className="btn btn-primary btn-lg">
              {c.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand col */}
            <div className="footer-brand">
              <div className="footer-logo">
                <Image src="/logo.png" alt="Next Agent" width={160} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <p className="footer-tagline">{c.tagline}</p>
              <div className="footer-mendix-badge">
                <span className="mendix-dot" />
                {c.mendixPartner}
              </div>
              <div className="footer-contact">
                <a href="mailto:contact@nextagent.com.vn" className="footer-contact-item">
                  <Mail size={14} />
                  contact@nextagent.com.vn
                </a>
                <a href="tel:+84902770989" className="footer-contact-item">
                  <Phone size={14} />
                  +84 902 770 989
                </a>
                <div className="footer-contact-item">
                  <MapPin size={14} />
                  {c.address}
                </div>
              </div>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Globe size={16} />
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">{c.solutions}</h4>
              {c.solutionLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
              ))}
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">{c.services}</h4>
              {c.serviceLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
              ))}
              <h4 className="footer-col-title" style={{ marginTop: '1.5rem' }}>{c.industries}</h4>
              {c.industryLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
              ))}
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">{c.company}</h4>
              {c.companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-rights">{c.rights}</p>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
