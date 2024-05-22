import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNote } from '../store';

const NoteField = () => {
  const dispatch = useDispatch();
  const note = useSelector((state: any) => state.note);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(event.target.value));
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Enter Note:</h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        className="w-full p-3 h-32 text-lg rounded-lg border-2 border-transparent focus:border-white focus:outline-none bg-white text-gray-700"
      />
    </div>
  );
};

export default NoteField;