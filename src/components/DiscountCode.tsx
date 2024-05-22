import React, { useState } from 'react';

const DiscountCode = () => {
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const validateCode = (code: string) => {
    return code === 'DISCOUNT2024';
  };

  const generateCode = () => {
    setGeneratedCode('NEWCODE123');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Enter Discount Code:</h2>
      <input
        type="text"
        value={code}
        onChange={handleCodeChange}
        className="w-full p-3 mb-4 text-lg rounded-lg border-2 border-transparent focus:border-white focus:outline-none bg-white text-gray-700"
      />
      <button 
        onClick={generateCode} 
        className="w-full p-3 mb-4 text-lg rounded-lg bg-purple-600 hover:bg-purple-800 text-white transition-colors duration-300">
        Generate Code
      </button>
      {generatedCode && <p className="text-lg text-white">Generated Code: {generatedCode}</p>}
      {!validateCode(code) && code && (
        <p className="text-red-300 text-lg mt-2">Invalid Discount Code</p>
      )}
    </div>
  );
};

export default DiscountCode;