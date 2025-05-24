import React, { useState } from 'react';
export default function NoteModal({ onSave, onClose }) {
  const [title, setTitle] = useState('');
  const [text, setText]   = useState('');

  const handleSave = () => {
    if (title.trim() && text.trim()) {
      onSave({ title, text });
      setTitle('');
      setText('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Note</h2>
        <input
          className="modal-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="modal-textarea"
          rows={4}
          placeholder="Your note..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="btn save" onClick={handleSave}>Save</button>
          <button className="btn cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}