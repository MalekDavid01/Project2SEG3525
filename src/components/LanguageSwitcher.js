import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <Button onClick={() => changeLanguage('en')} className="me-2">English</Button>
      <Button onClick={() => changeLanguage('ar')}>العربية</Button>
    </div>
  );
};

export default LanguageSwitcher;
