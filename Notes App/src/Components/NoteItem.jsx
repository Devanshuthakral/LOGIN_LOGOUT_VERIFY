import React from "react";
import ReactMarkdown from "react-markdown";

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border mb-4">
      <h3 className="text-xl font-bold text-blue-700">{note.title}</h3>
      <p className="text-gray-500 text-sm mb-2">
        Tags: {note.tags.join(", ")}
      </p>
      <div className="prose max-w-full">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
      <div className="mt-3 flex gap-4">
        <button onClick={onEdit} className="text-blue-600 hover:underline">Edit</button>
        <button onClick={onDelete} className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
