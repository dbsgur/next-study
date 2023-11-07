'use client';
import styled from 'styled-components';
import TrimInput from './components/TrimInput';
import {useState} from 'react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export default function Home() {
  const [todo, setTodo] = useState([] as string[]);
  const addTodo = (things: string) => setTodo([...todo, things]);
  return (
    <Main>
      <h2>TODO</h2>
      <ul>
        {todo.map((s) => (
        <li key={s}>
          {s}
        </li>
        ))}
      </ul>
      <TrimInput label='할일' onEvent={addTodo}/>
    </Main>
  )
}