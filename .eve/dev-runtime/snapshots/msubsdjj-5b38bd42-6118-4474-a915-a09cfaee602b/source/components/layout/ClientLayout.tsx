'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LanguageContextType = {
  lang: 'vi' | 'en';
  setLang: (lang: 'vi' | 'en') => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'vi',
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Navbar lang={lang} onLangChange={setLang} theme={theme} onThemeToggle={toggleTheme} />
        <main style={{ minHeight: '100vh', paddingTop: 'var(--navbar-height)' }}>
          {children}
        </main>
        <Footer lang={lang} />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
