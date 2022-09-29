import React from 'react';
import '../../styles/add-note-btn.css';

export default function AddNoteBtn({ handleAddNote }) {
  return (
    <button className="add-note-btn" onClick={handleAddNote}>
      <span className="bx bx-check add-icon"></span>
      <span>ADD NOTE</span>
    </button>
  );
}
