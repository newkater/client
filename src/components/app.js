import React from 'react';

import TodoList from './todo-list';
import ItemAddForm from './item-add-form'

export default class App extends React.Component {

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee', 12),
            this.createTodoItem('Have a Lunch', 4)
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => (el.id === id));

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    createTodoItem(label, id) {
        return {
            label,
            id
        };
    };

    render () {
        const todoData = this.state.todoData;
        return (
            <div>
                <h1>Hello world</h1>
                <ItemAddForm todos = {todoData}/>
                <TodoList todos={todoData}
                          onDeleted={(id) => this.deleteItem(id)}/>
            </div>
        );
    };
}