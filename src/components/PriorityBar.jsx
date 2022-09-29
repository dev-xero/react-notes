import React from 'react';
import PriorityButton from './PriorityButton';
import '../styles/priority-bar.css';

export default function PriorityBar({ priority, setPriority }) {
  const priorityLvls = [
    {
      index: 0,
      level: 'High',
    },
    {
      index: 1,
      level: 'Medium',
    },
    {
      index: 2,
      level: 'Low',
    },
  ];

  const handlePriority = (index) => {
    setPriority(index)
  };

  return (
    <div className="priority-bar">
      {priorityLvls.map(({ level, index }) => (
        <PriorityButton
          level={level}
          key={level}
          active={priority === index}
          handlePriority={() => handlePriority(index)}
        ></PriorityButton>
      ))}
    </div>
  );
}
