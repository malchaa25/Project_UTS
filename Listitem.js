
export default function List(){

return(
<div className='list'>
		<h3>Todo List</h3>
		<ul className='item'>
		<li>
			<label>
				<input type='checkbox'></input>Workout
			</label>
			<button id='btn btn-danger'>Delete</button>
		</li>
		<li>
			<label>
				<input type='checkbox'></input>Learning
			</label>
			<button id='btn btn-danger'>Delete</button>
		</li>
		<li>
			<label>
				<input type='checkbox'></input>Sleeping
			</label>
			<button id='btn btn-danger'>Delete</button>
		</li>
		</ul>
		</div>
)
		}