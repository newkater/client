import React, {Component} from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {

    state = {
        isUpdating: false,
        inputText: ''
    };

    cancel () {
        this.setState({isUpdating: false});
    }

    save (item) {
        this.props.onUpdated(item);
        this.setState({isUpdating: false});
    };

    componentDidMount() {
        const {label} = this.props;
        this.setState({inputText: label});
    }

    render() {
        let inputing = React.createRef();
        let {id, label, onDeleted, onUpdated} = this.props;
        const textForm = (t) => {
            if (this.state.isUpdating) {
                return (
                    <span>
                        <input placeholder={t} ref={inputing}/>
                        <button className="btn btn-outline-success btn-sm"
                                onClick={() => this.save({id, label: inputing.current.value})}>
                            <i className="fa fa-check-square"></i>
                        </button>
                        <button className="btn btn-outline-danger btn-sm"
                                onClick={() => this.cancel()}>
                            <i className="fa fa-window-close"></i>
                        </button>
                    </span>
                );
            }
            else {
                return (
                    <span className="todo-list-item-label">
                        {t}
                    </span>
                )
            };
        };
        return (
            <span className="todo-list-item">
                {textForm(label)}
                <button type="button"
                        onClick={() => {this.setState({isUpdating: true})}}
                        className="btn btn-outline-info btn-sm float-right">
                        <i className="fa fa-edit"/>
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDeleted(id)}>
                        <i className="fa fa-trash-o"/>
                </button>
                    {/*<h2>TodoListItem</h2>*/}
            </span>
        );
    }
}

export default TodoListItem;