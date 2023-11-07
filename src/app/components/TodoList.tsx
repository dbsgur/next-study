interface TodoListProps {
  todos: string[];
  onEvent: (idx: number) => void;
}

export default function TodoList({todos, onEvent}: TodoListProps ) {
  return (
    <>
      {todos.map((todo: string, idx: number) => (
        <li key={idx}>
          {todo}
          <button onClick={() => onEvent(idx)}> X </button>
        </li>
      ))}
    </>
  )
}