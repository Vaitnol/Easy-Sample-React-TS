import React, {useState} from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd();
      setTitle('');
    }
  }

  return (
    <div className="input-field">
      <input onKeyPress={keyPressHandler} onChange={changeHandler} value={title} type="text" id="title" placeholder="Enter your task"/>
      <label htmlFor="title" className="active">
        Enter your task
      </label>
    </div>
  )
}