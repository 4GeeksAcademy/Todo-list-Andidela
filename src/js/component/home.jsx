import React, { useState } from 'react';
import '/workspaces/Todo-list-Andidela/src/styles/index.css';

function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState('');

	const handleAddTask = (e) => {
		if (e.key === 'Enter' || e.type === 'click') {
			if (input.trim() !== '') {
				setTasks([...tasks, input]);
				setInput('');
			}
		}
	};

	const handleDeleteTask = (index) => {
		setTasks(tasks.filter((task, i) => i !== index));
	};

	return (
		<div className="paper" style={{width: 500, marginLeft: 400, marginTop: 100}}>
			<div className="todo-app">
				<h1>To-Do List</h1>
				<div className="input-container">
					<input
						type="text"
						placeholder="Add a new task"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleAddTask}
					/>
					<button onClick={handleAddTask}>Add</button>
				</div>

				{/* Task List */}
				<ul className="task-list">
					{tasks.length === 0 ? (
						<p className="no-tasks">No tasks, add a task</p>
					) : (
						tasks.map((task, index) => (
							<li
								key={index}
								className="task-item"
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(null)}
							>
								<span>{task}</span>
								<button className="delete-btn" onClick={() => handleDeleteTask(index)}>
									x
								</button>
							</li>
						))
					)}
				</ul>
			</div>
		</div>

	);
}

export default App;
