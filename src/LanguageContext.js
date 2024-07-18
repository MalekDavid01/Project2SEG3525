import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  newsTitle: {
    en: "Our Latest News!",
    ar: "آخر الأخبار!"
  },
  readMore: {
    en: "Read More",
    ar: "اقرأ أكثر"
  },
  articleNotFound: {
    en: "Article not found",
    ar: "المقال غير موجود"
  },
  back: {
    en: "Back",
    ar: "رجوع"
  },
  date: {
    en: "Date",
    ar: "تاريخ"
  },
  author: {
    en: "Author",
    ar: "الكاتب"
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
