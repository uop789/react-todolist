import React, { Component } from "react";
import uuid from "uuid";
import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";
import Count from "./components/Count";



class TodoApp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            userInput: '',
            todoList: []
        };
    }

    updateUserInput= (input) => {
        this.setState({
            userInput: input
        })
    };

    addToList = () => {
        if(this.state.userInput) {
            this.setState({
                todoList: [
                    {
                        id: uuid(),
                        title: this.state.userInput,
                        done: false
                    },
                    ...this.state.todoList
                ],
                userInput: ''
            })
        }
    };

    toggleTodoDone = (target, index) => {
        // copy the array
        const todoList = [...this.state.todoList];
        // copy the todo
        todoList[index] = {...todoList[index]};
        // update done property on copied todo
        todoList[index].done = target.checked;

        this.setState({
            todoList
        });
    };

    removeTodo = (index) =>{
        // copy the array
        const todoList = [...this.state.todoList];
        todoList.splice(index, 1);

        this.setState({
            todoList
        });
    };

    render() {
        return (
            <div className="container center">
                <h1 className="center title">My TODO App</h1>
                <Count
                    itemsCount={this.state.todoList.length}
                    uncheckedCount={this.state.todoList.filter(item => {
                        return !item.done;
                    }).length
                    }
                />
                <AddNewTodo
                    userInput = {this.state.userInput}
                    updateUserInput = {this.updateUserInput}
                    addToList = {this.addToList}
                />

                {this.state.todoList && this.state.todoList.length ?
                    <TodoList
                    todoList={this.state.todoList}
                    toggleTodoDone={this.toggleTodoDone}
                    removeTodo={this.removeTodo}
                    /> : null}

            </div>
        );
    }
}

export default TodoApp;
