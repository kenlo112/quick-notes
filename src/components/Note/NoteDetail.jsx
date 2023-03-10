export default function NoteDetail({ notes, user, setNotes }) {


  return (
    <div>
      <div>user: {user.name}</div>
      <div>posted: {new Date(notes.updatedAt).toLocaleDateString()}</div>
      <div>
        text: {notes.content}{" "}
      </div>
      <hr />
    </div>
  );
}