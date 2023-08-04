import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editMode, setEditMode] = useState(false)
  const [editNoteId, setEditNoteId] = useState(null)

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

  const handleEditNote = (note) => {
    setEditMode(true);
    setEditNoteId(note.id);
    setNewNote({
      title: note.title,
      content: note.content,
    });
  };

  const handleEditNoteCancel = () => {
    setEditMode(false);
    setEditNoteId(null);
    setNewNote({title:'', content:''})
  }

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  return (
    <div className='NoteApp'>
        <h1>NOTE APP</h1>
        <div className='Submit' >
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
          {editMode ? (
            <button type ='submit'>Save Edit</button>
          ):(
          <button type='submit'>Add Note</button>
          )}
          </form>
      </div>

      <div className='NoteWrapper'>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              {editMode && editNoteId === note.id ? (
                <button onClick={() => handleEditNoteCancel()}> Cancel Edit</button>
              ):(
                <button onClick={() => handleEditNote(note)}>Edit</button>
              )}
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteApp;
