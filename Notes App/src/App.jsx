import React, { useState, useEffect } from "react";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import TagFilter from "./Components/TagFilter";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Save a new note or update an existing one
  const saveNote = (note) => {
    if (editingNote !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingNote] = note;
      setNotes(updatedNotes);
      setEditingNote(null);
    } else {
      setNotes([...notes, note]);
    }
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Set note to edit
  const editNote = (index) => {
    setEditingNote(index);
  };

  // Get tags from all notes
  const tagOptions = [...new Set(notes.flatMap(note => note.tags))].map(tag => ({
    value: tag,
    label: tag
  }));

  // Filter notes based on selected tags
  const filteredNotes = selectedTags.length > 0
    ? notes.filter(note =>
      selectedTags.every(tag => note.tags.includes(tag.value))
    )
    : notes;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-blue-700">
           Markdown Notes App
        </h1>

        {/* Tag Filter Dropdown */}
        <TagFilter
          options={tagOptions}
          selected={selectedTags}
          setSelected={setSelectedTags}
        />

        {/* Note Form */}
        <NoteForm
          onSave={saveNote}
          editingNote={editingNote !== null ? notes[editingNote] : null}
        />

        {/* Notes List */}
        <NoteList
          notes={filteredNotes}
          onEdit={editNote}
          onDelete={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
