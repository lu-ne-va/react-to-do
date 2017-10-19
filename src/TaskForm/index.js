import React, {Component} from 'react';
import './style.css'

export class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: props.item
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	changeProp(propName, event) {
		let item = this.state.item;
		item[propName] = event.target.value;
		this.setState({item: item});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(`New name = ${this.state.item.name}`);
		this.props.onTaskFormSubmit(this.state.item);
	}



	render() {
		return (
			<form className="task-form" onSubmit={this.handleSubmit}>
				<fieldset>
					<label>Name</label>
					<input type="text" className="task-form__input" value={this.state.item.name} onChange={(event) => this.changeProp('name', event)}/>
				</fieldset>
				<fieldset>
					<label>Description</label>
					<input type="text" className="task-form__input" value={this.state.item.desc} onChange={(event) => this.changeProp('desc', event)}/>
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		);
	}
}
