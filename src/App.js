import React, {Component} from 'react';
import './App.css';
import {Task} from './Task/'
import {TaskForm} from './TaskForm/'

export class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{
					id: 'id1',
					name: 'name1',
					desc: 'gggggggg',
					isDone: false
				},
				{
					id: 'id2',
					name: 'name2',
					desc: 'hhhhhh',
					isDone: false
				},
				{
					id: 'id3',
					name: 'name3',
					desc: 'ddddddd',
					isDone: false
				}
			],
			showTaskForm: false
		};
		this.onTaskFormSubmit = this.onTaskFormSubmit.bind(this);
	}

	taskUpdated (item) {
		const h = this.state.items;
		let index = h.findIndex((elem) => elem.id === item.id);
		h[index].isDone = !h[index].isDone;
		this.setState({
			items: h
		});
	}
	addTask (item) {
		const tasks = [...this.state.items, item];
		return tasks;
	}
	updateFormState (newFormState) {
		this.setState({
			items: this.state.items,
			showTaskForm: newFormState
		});
	}
	onTaskFormSubmit (task) {
		let tasks = [];
		if(task.id){
			tasks = this.updateTaskInList(task);
		} else {
			task.id = Math.random();
			tasks = this.addTask(task);
		}
		this.setState({
			items: tasks,
			showTaskForm: false
		});
	}
	updateTaskInList(task){
		const items = this.state.items;
		let itemIndex = items.findIndex((elem) => elem.id === task.id);
		let keys = Object.keys(items[itemIndex]);
		keys.forEach(function (currentValue, index, array) {
			if(currentValue !== 'id'){
				items[itemIndex][currentValue] = task[currentValue];
			}
		});
		return items;
	}

	render() {
		return (
			<div className="App">
				<div className="App-tasks">
					{this.state.items.map((item) => <Task key={item.id} item={item} onUpdate={this.taskUpdated}/>)}
				</div>
				{this.state.showTaskForm ? null : <button onClick={() => this.updateFormState(true)}>Add task</button> }
				{this.state.showTaskForm ? <TaskForm item={this.state.items[0]} onTaskFormSubmit={this.onTaskFormSubmit} /> : null }
			</div>
		);
	}
}
