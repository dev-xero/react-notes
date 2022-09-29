import React from 'react';
import '../styles/add-notes-block.css';

function AddNotesBlock({ handleNotesShow }) {
  return (
    <div className="add-notes-block" onClick={handleNotesShow}>
			<span className="add-icon bx bx-pencil"></span>
			<h4>Add Note</h4>
    </div>
  );
}

export default AddNotesBlock;
