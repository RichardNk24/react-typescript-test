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
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Select an Option:</h2>
      <div className="space-y-2">
        {['Option A', 'Option B', 'Option C'].map(option => (
          <label key={option} className="block text-white">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="mr-2 accent-purple-500"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;