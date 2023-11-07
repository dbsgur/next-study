'use client';
import styled from 'styled-components';
import TrimInput from './components/TrimInput';
import {useState} from 'react';
import TodoList from './components/TodoList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export default function Home() {
  const [todos, setTodos] = useState([] as string[]);
  const addTodo = (todo: string) => setTodos([...todos, todo]);
  return (
    <Main>
      <h2>TODO</h2>
      <ul>
        <TodoList todos={todos} />
      </ul>
      <TrimInput label='할일' onEvent={addTodo}/>
    </Main>
  )
}