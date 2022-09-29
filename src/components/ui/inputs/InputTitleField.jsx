import React from 'react';

export default function InputTitleField({ title, handleTitleChange }) {
  return (
    <input
      type="text"
      name="title-field"
      id="title-field"
      className="title-field"
      autoCorrect="off"
      autoComplete="off"
      autoFocus="on"
      placeholder="note title"
      value={title}
      onChange={(e) => handleTitleChange(e.target.value)}
    />
  );
}
