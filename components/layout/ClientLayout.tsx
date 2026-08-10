'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      <main style={{ minHeight: '100vh', paddingTop: 'var(--navbar-height)' }}>
        {/* Pass lang to children via React context or just let pages use their own or assume 'vi' for now since standard App router doesn't easily pass props to children like this. 
            For MVP, we will render children, but we can provide the lang via context if needed. Let's create a simple context. */}
        <LanguageContext.Provider value={{ lang, setLang }}>
          {children}
        </LanguageContext.Provider>
      </main>
      <Footer lang={lang} />
    </>
  );
}

import { createContext, useContext } from 'react';

type LanguageContextType = {
  lang: 'vi' | 'en';
  setLang: (lang: 'vi' | 'en') => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'vi',
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
