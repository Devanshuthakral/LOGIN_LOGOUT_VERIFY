import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📚 Your Notes</h2>

      {notes.length === 0 ? (
        <p className="text-gray-500">No notes found. Create your first note!</p>
      ) : (
        <div className="space-y-4">
          {notes.map((note, index) => (
            <NoteItem
              key={index}
              note={note}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
