import React from 'react';
import './style.css'

export const Task = function (props) {
	return 	<div className={"task" + (props.item.isDone ? ' task--done': ' ')}>
		<div className="task__data">
			<span className="task__name">{props.item.name}</span>
			<span className="task__desc">{props.item.desc}</span>
		</div>
		<input type="checkbox" className="task__checkbox" value={props.item.isDone} onChange={() => props.onUpdate(props.item)}/>
	</div>
};