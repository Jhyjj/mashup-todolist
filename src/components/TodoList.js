import React from 'react';
import styled from 'styled-components';
import TodoItem from './Todoitem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    padding: 20px 32px;
    overflow-y: auto;
    flex : 1;
`;

const TodoList = () => {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(todo=><TodoItem key ={todo.id} id={todo.id} text={todo.text} done={todo.done}/>)}
        </TodoListBlock>
    );
};

export default TodoList;