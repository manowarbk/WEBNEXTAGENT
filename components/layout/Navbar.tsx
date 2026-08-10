'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

interface NavChild {
  label: string;
  href: string;
  badge?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: { vi: NavItem[]; en: NavItem[] } = {
  vi: [
    {
      label: 'Giải pháp',
      href: '/giai-phap',
      children: [
        { label: 'Mendix Low-Code Platform', href: '/giai-phap/mendix-low-code' },
        { label: 'Giải pháp Supply Chain', href: '/giai-phap/supply-chain-solutions' },
        { label: 'Hệ thống quản lý đánh giá nhân viên 360', href: '/giai-phap/360-kpi-management' },
        { label: 'Công cụ thông minh (Intelligence Tools)', href: '/giai-phap/intelligence-tools' },
      ],
    },
    {
      label: 'Dịch vụ',
      href: '/dich-vu',
      children: [
        { label: 'Tư vấn Chuyển đổi số', href: '/dich-vu/tu-van-chuyen-doi-so' },
        { label: 'Tư vấn & Triển khai ERP', href: '/dich-vu/erp-implementation' },
        { label: 'Kho dữ liệu & Báo cáo thông minh', href: '/dich-vu/datawarehouse-intelligence' },
        { label: 'Tư vấn & Triển khai POS, Loyalty', href: '/dich-vu/pos-loyalty' },
        { label: 'Tích hợp hệ thống', href: '/dich-vu/tich-hop-he-thong' },
      ],
    },
    {
      label: 'Ngành',
      href: '/nganh',
      children: [
        { label: 'Bán lẻ', href: '/nganh/ban-le' },
        { label: 'Phân phối', href: '/nganh/phan-phoi' },
        { label: 'Sản xuất', href: '/nganh/san-xuat' },
        { label: 'E-commerce', href: '/nganh/e-commerce' },
      ],
    },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  ],
  en: [
    {
      label: 'Solutions',
      href: '/giai-phap',
      children: [
        { label: 'Mendix Low-Code Platform', href: '/giai-phap/mendix-low-code' },
        { label: 'Supply Chain Solutions', href: '/giai-phap/supply-chain-solutions' },
        { label: '360 Employee Evaluation', href: '/giai-phap/360-kpi-management' },
        { label: 'Intelligence Tools for Business', href: '/giai-phap/intelligence-tools' },
      ],
    },
    {
      label: 'Services',
      href: '/dich-vu',
      children: [
        { label: 'Digital Transformation Consulting', href: '/dich-vu/tu-van-chuyen-doi-so' },
        { label: 'ERP Implementation and Consulting', href: '/dich-vu/erp-implementation' },
        { label: 'Datawarehouse and Intelligence Report', href: '/dich-vu/datawarehouse-intelligence' },
        { label: 'POS and Loyalty Implementation', href: '/dich-vu/pos-loyalty' },
        { label: 'System Integration', href: '/dich-vu/tich-hop-he-thong' },
      ],
    },
    {
      label: 'Industries',
      href: '/nganh',
      children: [
        { label: 'Retail', href: '/nganh/ban-le' },
        { label: 'Distribution', href: '/nganh/phan-phoi' },
        { label: 'Manufacturing', href: '/nganh/san-xuat' },
        { label: 'E-commerce', href: '/nganh/e-commerce' },
      ],
    },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/ve-chung-toi' },
  ],
};

interface NavbarProps {
  lang?: 'vi' | 'en';
  onLangChange?: (lang: 'vi' | 'en') => void;
}

export default function Navbar({ lang = 'vi', onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const items = navItems[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo" style={{ padding: '0.5rem 0' }}>
            <Image src="/logo.png" alt="Next Agent" width={160} height={40} style={{ objectFit: 'contain' }} priority />
          </Link>

          {/* Desktop Nav */}
          <div className="navbar-links">
            {items.map((item) => (
              <div
                key={item.label}
                className="nav-item"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className="nav-link">
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`nav-chevron ${activeDropdown === item.label ? 'open' : ''}`} />}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="dropdown-item">
                        <span>{child.label}</span>
                        {child.badge && <span className="dropdown-badge">{child.badge}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="navbar-actions">
            <button
              className="lang-toggle"
              onClick={() => onLangChange?.(lang === 'vi' ? 'en' : 'vi')}
              title="Switch language"
            >
              <Globe size={14} />
              <span>{lang === 'vi' ? 'EN' : 'VI'}</span>
            </button>
            <Link href="/book-demo" className="btn btn-primary btn-sm">
              {lang === 'vi' ? 'Book Demo' : 'Book Demo'}
            </Link>
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container">
            {items.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mobile-submenu">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/book-demo" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }} onClick={() => setMobileOpen(false)}>
              {lang === 'vi' ? 'Book Demo Ngay' : 'Book a Demo'}
            </Link>
          </div>
        </div>
      )}

      
    </>
  );
}
