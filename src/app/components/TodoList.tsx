import {useState} from 'react';

interface TodoListProps {
  todos: string[];
}

export default function TodoList({todos}: TodoListProps ) {

  return (
    <>
      {todos.map((todo: string, idx: number) => (
        <li key={idx}>
          {todo}
        </li>
      ))}
    </>
  )
}