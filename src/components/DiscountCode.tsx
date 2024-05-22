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
    <div className="p-4">
      <h2 className="text-xl">Enter Discount Code:</h2>
      <input
        type="text"
        value={code}
        onChange={handleCodeChange}
        className="border p-2"
      />
      <button onClick={generateCode} className="ml-2 p-2 bg-blue-500 text-white">
        Generate Code
      </button>
      {generatedCode && <p className="mt-2">Generated Code: {generatedCode}</p>}
      {!validateCode(code) && code && (
        <p className="text-red-500">Invalid Discount Code</p>
      )}
    </div>
  );
};

export default DiscountCode;