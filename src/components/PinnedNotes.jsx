import React from 'react';
import Note from './Note';
import '../styles/pinned-notes.css';

export default function PinnedNotes({ pinnedNotes }) {
  return (
    <div className="pinned-notes">
      <h1 className="title">
        <span className="bx bx-pin"></span>
        <span>Pinned</span>
      </h1>
      <div className="note-list">
        {pinnedNotes.map(({ id, title, description, priority }) => (
          <Note
            key={id}
            title={title}
            description={description}
            priority={priority}
          ></Note>
        ))}
      </div>
    </div>
  );
}
