import { useState } from 'react';
import styled from 'styled-components';

const TrimContainer = styled.div`
  vertical-align: middle;
`

const Input = styled.input`
  border-radius: 10px;
  height: 30px;
  margin: 0 20px;
`

interface TrimInputProps {
  label: string;
  onEvent: (things:string) => void;
}

const TrimInput: React.FC<TrimInputProps> = ({ label, onEvent }) => {
  const [input, setInput] = useState('');
  const handleTest = () => {
    if (!input) return;
    onEvent(input);
    setInput('');
  }

  return (
    <TrimContainer>
      <label>{label}</label>
      <Input placeholder={label} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} value={input}/>
      <button onClick={handleTest}>추가</button>
    </TrimContainer>
  );
};

export default TrimInput;