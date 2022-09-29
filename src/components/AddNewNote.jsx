import React from 'react';
import { useState } from 'react';
import InputTitleField from './ui/inputs/InputTitleField';
import InputDescField from './ui/inputs/InputDescField';
import PriorityBar from './PriorityBar';
import PinBtn from './ui/PinBtn';
import AddNoteBtn from './ui/AddNoteBtn';
import '../styles/input-form.css';
import '../styles/add-new-note.css';

function AddNewNote({ isShowing, overlayClick, handleUpdateNotes }) {
  const [isPinned, setIsPinned] = useState(false);
  const [priority, setPriority] = useState(0);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleTitleChange = (value) => setTitle(value);
  const handleDescChange = (value) => setDesc(value);

  const resetValues = () => {
    setTitle('');
    setDesc('');
    setIsPinned(false);
    setPriority(0);
  };

  const handleAddNote = () => {
    handleUpdateNotes(title, desc, priority, isPinned);
    if (title) {
      resetValues();
      overlayClick();
    }
  };

  const handlePinned = () => {
    setIsPinned(!isPinned);
  };

  const handlePrioritySet = (index) => {
    setPriority(index);
  };

  return (
    <div className={isShowing ? 'add-new-note visible' : 'add-new-note'}>
      <div className="overlay" onClick={overlayClick}></div>
      <div className="add-new-content">
        <div className="header">
          <h2>ADD NEW NOTE</h2>
          <PinBtn handlePinned={handlePinned} isPinned={isPinned}></PinBtn>
        </div>
        <form className="input-form" onSubmit={(e) => e.preventDefault()}>
          <InputTitleField
            title={title}
            handleTitleChange={(value) => handleTitleChange(value)}
          ></InputTitleField>
          <InputDescField
            desc={desc}
            handleDescChange={handleDescChange}
          ></InputDescField>
        </form>
        <PriorityBar
          priority={priority}
          setPriority={(index) => handlePrioritySet(index)}
        ></PriorityBar>
        <AddNoteBtn handleAddNote={handleAddNote}></AddNoteBtn>
      </div>
    </div>
  );
}

export default AddNewNote;
