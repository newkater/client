import React from 'react';

import './todo-list-item.css'

const TodoListItem = ({id, label, onDeleted}) => {
    return (
        <span className="todo-list-item">

            <span className="todo-list-item-label">
                {/*{id}*/}
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-info btn-sm float-right">
                    <i className="fa fa-edit" />
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
            </button>
            {/*<h2>TodoListItem</h2>*/}
        </span>
    );
};

export default TodoListItem;