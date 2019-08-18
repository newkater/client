import React from 'react';

const ItemAddForm = () => {
    return (
        <span className="form-group d-flex">
            <input type="text" className="form-control" placeholder="Add new item" id="inputDefault"/>
            <button type="button" className="btn btn-outline-primary">Add</button>
        </span>
    );
};

export default ItemAddForm;