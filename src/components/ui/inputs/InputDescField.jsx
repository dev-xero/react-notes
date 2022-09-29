import React from 'react';

export default function InputDescField({ desc, handleDescChange }) {
  return (
    <textarea
      name="input-desc"
      id="input-desc"
      autoCorrect="off"
      spellCheck="off"
      value={desc}
      placeholder="description..."
      onChange={(e) => handleDescChange(e.target.value)}
    ></textarea>
  );
}
