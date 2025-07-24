import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const NoteForm = ({ onSave, editingNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setTags(editingNote.tags.join(", "));
    } else {
      setTitle("");
      setContent("");
      setTags("");
    }
  }, [editingNote]);

  const handleSubmit = () => {
    const tagArray = tags.split(",").map(t => t.trim()).filter(Boolean);
    onSave({ title, content, tags: tagArray });
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="mt-6 bg-gray-100 border border-gray-300 p-5 rounded-xl shadow-sm">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Write your markdown here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
      >
        {editingNote ? "Update Note" : "Add Note"}
      </button>

      {content && (
        <div className="mt-6 p-4 bg-white rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-2">📄 Live Markdown Preview:</h2>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default NoteForm;
