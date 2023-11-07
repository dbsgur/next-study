import { useState } from 'react';

interface TrimInputProps {
  label: string;
}

const TrimInput: React.FC<TrimInputProps> = ({ label }) => {
  const [input, setInput] = useState('');

  return (
    <>
      <label>{label}</label>
      <input placeholder={label}/>
    </>
  );
};

export default TrimInput;