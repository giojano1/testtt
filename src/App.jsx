import React, { useState } from "react";
import AddButton from "./components/AddButton";
const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center">
          {notes.map((note) => (
            <div
              className={`bg-${note.bgColor} w-[300px] h-[150px] p-4`}
              key={note.id}
            >
              <div className="flex justify-between">
                <button>remove</button>
                <button>download</button>
              </div>
              <div className="flex justify-between items-center">
                <input type="text" />
                <button>Add</button>
              </div>
              <div>
                {note.content.map((task) => (
                  <div>{task.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <AddButton setNotes={setNotes} />
      </main>
    </>
  );
};

export default App;
