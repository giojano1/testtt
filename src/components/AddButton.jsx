import React, { useState, useTransition } from "react";

const AddButton = ({ setNotes }) => {
  const [showOptions, setShowOptions] = useState(false);
  const addNote = (color) => {
    const newNote = {
      id: Date.now(),
      bgColor: color,
      content: [],
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setShowOptions((prev) => !prev);
  };
  return (
    <div className="fixed bottom-2 right-2">
      {showOptions && (
        <div className="flex flex-col ">
          <button
            className="bg-yellow-300 w-10 h-10 rounded-[100%]"
            onClick={() => addNote("yellow-300")}
          ></button>
          <button
            className="bg-green-300 w-10 h-10 rounded-[100%] mt-2"
            onClick={() => addNote("green-300")}
          ></button>
          <button
            className="bg-blue-300 w-10 h-10 rounded-[100%] mt-2"
            onClick={() => addNote("blue-300")}
          ></button>
          <button
            className="bg-pink-300 w-10 h-10 rounded-[100%] mt-2 mb-3"
            onClick={() => addNote("pink-300")}
          ></button>
        </div>
      )}
      <button
        className="w-10 h-10 rounded-[100%] bg-blue-600 flex items-center justify-center text-white"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
