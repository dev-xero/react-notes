import React from 'react';

export default function Note({ title, description, priority }) {
  return (
    <div className="note">
      <header>
        <main>
          <h2 className="title">{title}</h2>
          <span className="priority">
            <div
              className={
                priority === 0
                  ? 'circle high'
                  : priority === 1
                  ? 'circle mid'
                  : 'circle low'
              }
            ></div>
            <span>
              {priority === 0
                ? 'High priority'
                : priority === 1
                ? 'Medium priority'
                : 'Low priority'}
            </span>
          </span>
        </main>
        <span className="bx bxs-pin pin-icon-h"></span>
      </header>
      <p className="desc">{description}</p>
    </div>
  );
}
