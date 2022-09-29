import React from 'react';

const priorityBtnStyles = {
  fontSize: '14px',
};

export default function PriorityButton({ level, active, handlePriority }) {
  return (
    <div
			style={priorityBtnStyles}
			onClick={handlePriority}
      className={active === true ? 'priority-btn active' : 'priority-btn'}
    >
      <span
        className={
          level === 'High' ? 'circle high' : level === 'Medium' ? 'circle medium' : 'circle'
        }
      ></span>
      <span>{level} Priority</span>
    </div>
  );
}
