import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../store';

const RadioButtons = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: any) => state.option);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOption(event.target.value));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Select an Option:</h2>
      <label>
        <input
          type="radio"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={handleOptionChange}
        />
        Option A
      </label>
      <label>
        <input
          type="radio"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={handleOptionChange}
        />
        Option B
      </label>
      <label>
        <input
          type="radio"
          value="Option C"
          checked={selectedOption === 'Option C'}
          onChange={handleOptionChange}
        />
        Option C
      </label>
    </div>
  );
};

export default RadioButtons;