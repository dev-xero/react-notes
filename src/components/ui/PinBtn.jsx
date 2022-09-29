import React from 'react';

function PinBtn({ handlePinned, isPinned }) {
  const pinBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '8px',
    backgroundColor: 'var(--pin-btn-bg)',
    border: 'var(--theme-toggle-border)',
    borderRadius: '10px',
  };

  return (
    <span
      className={isPinned ? 'bx bx-pin pin-btn pinned' : 'bx bx-pin pin-btn'}
      onClick={handlePinned}
      style={pinBtnStyle}
    ></span>
  );
}

export default PinBtn;
