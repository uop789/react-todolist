import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

    render () {
        return (
            <ul className="center todo-list">
                {
                    this.props.todoList.map((item, index) => {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                index={index}
                                toggleTodoDone={this.props.toggleTodoDone}
                                removeTodo={this.props.removeTodo}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoList;