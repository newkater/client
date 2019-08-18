import React from 'react';

import TodoList from './todo-list';
import ItemAddForm from './item-add-form';
import './app.css';
import axios from "axios";

export default class App extends React.Component {

    state = {
        todoData: []
    };

    componentDidMount() {
        axios.get('http://localhost:7000/item').then(res => {
            //console.log(res.data);
            const newArray = res.data;
            this.setState({todoData: newArray});
        });
        console.log('3', this.state);
    }

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
        console.log(todoData);
        return (
            <div className='container app'>
                <h1>Hello world</h1>
                <ItemAddForm/>
                <TodoList todos={todoData}
                          onDeleted={(id) => this.deleteItem(id)}/>
            </div>
        );
    };
}