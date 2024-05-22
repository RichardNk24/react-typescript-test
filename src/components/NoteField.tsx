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
    <div className="p-4">
      <h2 className="text-xl">Enter Note:</h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        className="border p-2 w-full"
      />
    </div>
  );
};

export default NoteField;