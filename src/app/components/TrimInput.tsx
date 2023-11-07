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

const AddButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  &:hover{ background-color: darkgray;}
`

interface TrimInputProps {
  label: string;
  onEvent: (things:string) => void;
}

const TrimInput: React.FC<TrimInputProps> = ({ label, onEvent }) => {
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    if (!todo) return;
    onEvent(todo);
    setTodo('');
  }

  return (
    <TrimContainer>
      <label>{label}</label>
      <Input placeholder={label} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} value={todo}/>
      <AddButton onClick={addTodo}>추가</AddButton>
    </TrimContainer>
  );
};

export default TrimInput;