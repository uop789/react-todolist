import React, { Component } from 'react';

class AddNewTodo extends Component {

    render () {
        return (
            <div className="center">
                <input
                    onChange={this.props.updateUserInput}
                    value={this.props.userInput}
                    type="text"
                    placeholder="Add something to do"
                />
                <button className="button" onClick={this.props.addToList}>Add New TODO</button>

            </div>
        );
    }
}

export default AddNewTodo;