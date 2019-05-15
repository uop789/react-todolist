import React, { Component } from "react";
class TodoItem extends Component {

    render () {

        return (
            <li className="todo-list">
                <input
                    className="todo-checkbox"
                    onChange={ (event) => this.props.toggleTodoDone(event, this.props.index)}
                    type="checkbox"
                    checked={this.props.item.done} />
                <span style={{textDecoration: this.props.item.done ? 'line-through' : 'inherit'}}>{this.props.item.title}</span>
                <button className="todo-delete" onClick={() => this.props.removeTodo(this.props.index)}>Delete</button>
            </li>

        )
    }
}

export default TodoItem;