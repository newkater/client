import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todos, onDeleted, onUpdated}) => {

    const elements = todos.map((item) => {
        const {id, label} = item;
        return (
            <li key={id}>
                <TodoListItem id={id}
                              label={label}
                              onDeleted={onDeleted}
                              onUpdated={onUpdated}/>
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;