import { useNavigate } from "react-router-dom";
import NoteDetail from "../../components/Note/NoteDetail.jsx";
import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";

export default function NewNote({ setNotes, notes, user }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [noteData, setNoteData] = useState({
    content: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newNote = await notesAPI.addNote(noteData);
      setNotes([...notes, newNote]);
      navigate("/notes");
    } catch {
      setError("Try Again");
    }
  }

  const handleChange = (evt) => {
    setNoteData({ ...noteData, [evt.target.name]: evt.target.value });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            value={noteData.name}
            onChange={handleChange}
          ></textarea>
          <button type="submit">add note</button>
        </form>
      </div>
      <div>
        <h1>Notes</h1>
        {notes.length === 0 ? (
          <span>no notes yet</span>
        ) : (
          <div>
            {notes.map((note, i) => (
              <NoteDetail
                notes={note}
                key={i}
                user={user}
                setNotes={setNotes}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
