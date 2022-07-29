import React, { Component } from "react";
import "./InputBar.css";
import List from "../TodoList/List";
import ListTaskDone from "../ListTaskDone/ListTaskDone";

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TodoList: [],
      taskDone: [],
    };
    this.addTask = this.addTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    this.clearTask = this.clearTask.bind(this);
  }

  //add the task from the input bar to the list.
  addTask() {
    let taskList = this.state.TodoList;
    let task = document.getElementById("input").value;
    let id = Math.floor(Math.random() * 10000);
    let complete = false;

    taskList.push({ task, id, complete });
    this.setState({ TodoList: taskList });

    document.getElementById("input").value = "";
  }

  // toggle the task
  toggleTask(id) {
    //Initialization of variables
    const newTaskDone = this.state.taskDone;
    let newTask = this.state.TodoList;
    let listTask = [...this.state.TodoList];

    //change the status of complete from false to true ; delete the task from the todo list

    const todo = listTask.find((el) => el.id === id);
    todo.complete = !todo.complete;
    newTaskDone.push(todo);

    listTask = listTask.filter((el) => {
      return !el.complete;
    });

    this.setState({ TodoList: newTask });
    this.setState({ TodoList: listTask });
  }

  // untoggle the task in the task completed
  toggleTaskDone(id) {
    //Initialization of variables

    let newTaskDone = this.state.taskDone;
    let ListTaskCompleted = [...this.state.taskDone];
    let newTask = this.state.TodoList;

    //change the status of complete from true to false ; push the task that has been done to the list of Completed task.

    let todoCompleted = ListTaskCompleted.find((el) => el.id === id);
    todoCompleted.complete = !todoCompleted.complete;
    newTask.push(todoCompleted);

    ListTaskCompleted = ListTaskCompleted.filter((el) => {
      return el.complete;
    });

    this.setState(
      { taskDone: newTaskDone },
      console.log(this.state.taskDone, newTaskDone)
    );
    this.setState({ taskDone: ListTaskCompleted });
  }

  // clear the task in the task completed section.
  clearTask() {
    const newList = [...this.state.taskDone];
    const task = newList.filter((el) => !el.complete);
    this.setState({ taskDone: task });
  }

  render() {
    return (
      <div className="field">
        <div className="input">
          <input type="text" id="input" placeholder="enter your task" />
          <button className="addButton" onClick={this.addTask}>
            Add task
          </button>
          <button className="clearButton" onClick={this.clearTask}>
            Clear task
          </button>
        </div>
        <div className="fullList">
          <div>
            <p className="listTitle">TO-DO LIST</p>
            <div className="todolist">
              <p className="tasks">
                {this.state.TodoList.length >= 1
                  ? this.state.TodoList.map((el) => {
                      return (
                        <List
                          task={el.task}
                          key={el.id}
                          id={el.id}
                          complete={el.complete}
                          toggleTask={this.toggleTask}
                        />
                      );
                    })
                  : "You don't have any task at the moment."}
              </p>
            </div>
          </div>
          <div>
            <p className="listTitle">
              {this.state.taskDone > 1 ? "TASKS COMPLETED" : "TASK COMPLETED"}
            </p>
            <div className="todolistDone">
              <p className="tasks">
                {this.state.taskDone.length >= 1
                  ? this.state.taskDone.map((el) => {
                      return (
                        <ListTaskDone
                          task={el.task}
                          key={el.id}
                          id={el.id}
                          complete={el.complete}
                          toggleTaskDone={this.toggleTaskDone}
                        />
                      );
                    })
                  : "You don't have any completed task at the moment"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputBar;
