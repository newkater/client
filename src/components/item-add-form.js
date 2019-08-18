import React from 'react';

const ItemAddForm = ({addItem}) => {
    let textInput = React.createRef();

    const handleInput = (text) => {
        addItem(text);
        textInput.current.value = '';
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleInput(event.target.value)
        }
    };

    return (
        <span className="form-group d-flex">
            <input type="text"
                   className="form-control"
                   placeholder="Add new item"
                   id="inputDefault"
                   ref={textInput}
                   onKeyDown={handleKeyPress}
            />
            <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => handleInput(textInput.current.value)}>
                Add
            </button>
        </span>
    );
};

export default ItemAddForm;