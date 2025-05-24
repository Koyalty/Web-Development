import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc
} from 'firebase/firestore';
import NoteModal from './components/NoteModal';
import './App.css';

export default function App() {
  const [notes, setNotes]    = useState([]);
  const [showModal, setShow] = useState(false);
  const notesCol = collection(db, 'notes');

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCol, snap => {
      setNotes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleCreate = async note => {
    await addDoc(notesCol, { ...note, created: Date.now() });
    setShow(false);
  };

  const handleDelete = async id => {
    const ref = doc(db, 'notes', id);
    await deleteDoc(ref);
  };

  return (
    <div className="app">
      <header>
        <h1>My Notes</h1>
        <button className="btn create" onClick={() => setShow(true)}>
          + New Note
        </button>
      </header>
      {showModal && <NoteModal onSave={handleCreate} onClose={() => setShow(false)} />}
      <main>
        <ul className="notes-list">
          {notes.map(n => (
            <li key={n.id} className="note-item">
              <div className="note-header">
                <h3>{n.title}</h3>
                <button className="btn delete" onClick={() => handleDelete(n.id)}>×</button>
              </div>
              <p>{n.text}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}