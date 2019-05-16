import React, { Component } from 'react';

class AddNewTodo extends Component {

    render () {
        return (
            <div className="center todo-new">
                <textarea rows="4" cols="50"
                    onChange={(e) => {this.props.updateUserInput(e.target.value)}}
                    value={this.props.userInput}
                    placeholder="Add something to do"
                />
                <button className="button" onClick={this.props.addToList}>Add New TODO</button>

            </div>
        );
    }
}

export default AddNewTodo;