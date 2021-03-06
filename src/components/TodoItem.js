import React, { Component } from "react";
class TodoItem extends Component {

    render () {

        return (
            <li className="todo-container">
                <input
                    className="todo-checkbox"
                    onChange={ (e) => this.props.toggleTodoDone(e.target, this.props.index)}
                    type="checkbox"
                    checked={this.props.item.done} />
                <span style={{textDecoration: this.props.item.done ? 'line-through' : 'none'}}>{this.props.item.title}</span>
                <button className="todo-delete" onClick={() => this.props.removeTodo(this.props.index)}>Delete</button>
            </li>

        )
    }
}

export default TodoItem;