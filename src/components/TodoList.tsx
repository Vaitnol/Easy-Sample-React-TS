import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[],
  onToggle(id: number): void,
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
  if (todos.lenth === 0) {
    return <p>No tasks</p>
  }
  return(
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }

        const removeHandler = (e:React.MouseEvent, id: number) => {
          e.preventDefault();

          onRemove(id);
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
              <span>{todo.title}</span>
              <i onClick={e => removeHandler(e, todo.id)}>Delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}