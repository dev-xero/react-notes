import React from 'react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ui/ThemeToggle';
import '../styles/header.css';

function Header() {
  const THEME_DATA_KEY = 'react-notes-theme';

  const [theme, setTheme] = localStorage.getItem(THEME_DATA_KEY)
    ? useState(localStorage.getItem(THEME_DATA_KEY))
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? useState('dark')
    : useState('light');

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem(THEME_DATA_KEY, theme);
  }, [theme]);

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem(THEME_DATA_KEY, theme);
  };

  return (
    <header className="app-header">
      <div className="inner-width">
        <h1 className="title">
          <span className="highlight-blue">#REACT</span> NOTES
          <ThemeToggle
            handleTheme={handleThemeChange}
            theme={theme}
          ></ThemeToggle>
        </h1>
      </div>
    </header>
  );
}

export default Header;
