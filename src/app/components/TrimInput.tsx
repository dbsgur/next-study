import { useState } from 'react';
import styled from 'styled-components';

const TrimContainer = styled.div`
  vertical-align: middle;
`

const InputLabel = styled.label`
  margin-right: 10px;
`

const Input = styled.input`
  border-radius: 10px;
  height: 30px;
`

interface TrimInputProps {
  label: string;
}

const TrimInput: React.FC<TrimInputProps> = ({ label }) => {
  const [input, setInput] = useState('');

  return (
    <TrimContainer>
      <InputLabel>{label}</InputLabel>
      <Input placeholder={label}/>
    </TrimContainer>
  );
};

export default TrimInput;