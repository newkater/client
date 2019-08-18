import React from 'react';
import uuid from 'uuid';

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
        axios.delete(`http://localhost:7000/item/${id}`)
            .then (res => {
                const newArray = this.state.todoData.filter((item) => item.id !== id);
                this.setState({todoData: newArray});
            });
    };

    addItem = (text) => {
        const newItem = {label: text, id: (parseInt(Date.now()) % 100000000)};
        console.log(newItem);
        axios.post('http://localhost:7000/item', newItem)
            .then(res => {
                this.setState({todoData: [...this.state.todoData, newItem]});
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
                <ItemAddForm addItem={this.addItem}/>
                <TodoList todos={todoData}
                          onDeleted={(id) => this.deleteItem(id)}/>
            </div>
        );
    };
}