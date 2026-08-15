'use client';
import Link from 'next/link';
import { ArrowRight, Layers, Bot, LayoutGrid, Truck, ShoppingCart, Code2, Target, Cpu } from 'lucide-react';
import { useLanguage } from '../layout/ClientLayout';
import { solutions } from '@/data/solutions';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={24} />,
  Bot: <Bot size={24} />,
  LayoutGrid: <LayoutGrid size={24} />,
  Truck: <Truck size={24} />,
  ShoppingCart: <ShoppingCart size={24} />,
  Code2: <Code2 size={24} />,
  Target: <Target size={24} />,
  Cpu: <Cpu size={24} />,
};

export default function SolutionsGrid() {
  const { lang } = useLanguage();

  return (
    <section className="section bg-surface-2" id="solutions">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header centered">
            <div className="section-eyebrow">Solutions</div>
            <h2 className="section-title">
              {lang === 'vi' ? 'Hệ sinh thái giải pháp số' : 'Digital Solution Ecosystem'}
            </h2>
            <p className="section-subtitle">
              {lang === 'vi' 
                ? 'Xây dựng trên nền tảng Mendix Low-Code, chúng tôi cung cấp giải pháp toàn diện cho từng bài toán nghiệp vụ.'
                : 'Built on Mendix Low-Code platform, we provide comprehensive solutions for specific business challenges.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3">
          {solutions.map((sol, index) => (
            <ScrollReveal key={sol.slug} direction="up" delay={0.1 * (index % 3)}>
              <Link href={`/giai-phap/${sol.slug}`} className="solution-card">
                <div className="solution-icon" style={{ color: sol.color, backgroundColor: `${sol.color}15` }}>
                  {iconMap[sol.icon]}
                </div>
                <h3 className="solution-title">{lang === 'vi' ? sol.titleVi : sol.titleEn}</h3>
                <p className="solution-desc">{lang === 'vi' ? sol.descVi : sol.descEn}</p>
                
                <ul className="solution-features">
                  {sol.features.slice(0, 3).map((f, idx) => (
                    <li key={idx}>
                      <span className="bullet" style={{ backgroundColor: sol.color }}></span>
                      {lang === 'vi' ? f.vi : f.en}
                    </li>
                  ))}
                </ul>
                
                <div className="solution-cta">
                  <span style={{ color: sol.color, fontWeight: 600 }}>{lang === 'vi' ? 'Tìm hiểu thêm' : 'Learn more'}</span>
                  <ArrowRight size={16} color={sol.color} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      
    </section>
  );
}
