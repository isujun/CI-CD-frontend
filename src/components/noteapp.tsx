import { useState } from "react";

export const NoteApp = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  function addNotes() {
    setNotes([...notes, note]);
    setNote("");
  }

  function deleteNote(item: string) {
    const newNotes = [...notes];
    const filteredNotes = newNotes.filter((note) => note !== item);
    setNotes(filteredNotes);
  }

  // useEffect(() => {
  //   console.log("you add new note");
  // }, [notes]);
  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button onClick={addNotes}>Save</button>
      <div>
        {notes.map((item) => {
          return (
            <div key={item}>
              <div>{item}</div>
              <button onClick={deleteNote}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
