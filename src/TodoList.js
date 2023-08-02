import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.title.trim() === '' || newNote.content.trim() === '') return;

    const newNoteObj = {
      id: Date.now(),
      title: newNote.title,
      content: newNote.content,
      
    };

    setNotes([...notes, newNoteObj]);
    setNewNote({ title: '', content: '' });
  };

  return (
    <div className='NoteApp'>
      <div className='Submit'>
        <h1>NOTE APP</h1>
        <form onSubmit={handleAddNote}>
          <input
            type='text'
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            placeholder='Note Title...'
          />
          <textarea
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            placeholder='Note Content...'
          ></textarea>
          <button type='submit'>Add Note</button>
        </form>
      </div>

      <div className='NoteWrapper'>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteApp;
