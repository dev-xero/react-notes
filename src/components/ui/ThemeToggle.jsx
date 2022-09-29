import React from 'react';

function ThemeToggle({ handleTheme, theme }) {
  const styles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    right: '32px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '20px',
    padding: '12px',
		backgroundColor: 'var(--theme-toggle-bg)',
		border: 'var(--theme-toggle-border)',
    borderRadius: '12px',
	};
	
	const rollStyles = {
    display: 'flex',
    alignItems: 'center',
		justifyContent: 'flex-start',
		maxWidth: '20px',
		maxHeight: '20px',
		overflow: 'hidden'
  };

  return (
    <div
      className={theme === 'light' ? 'theme-toggle' : 'theme-toggle light'}
      style={styles}
      onClick={handleTheme}
    >
      <div className="roll" style={rollStyles}>
        <span className="bx bx-sun light"></span>
        <span className="bx bx-moon dark"></span>
      </div>
    </div>
  );
}

export default ThemeToggle;
