import './style.css';
export default function Form(){
	return(
		
		<form className="form">
			<label htmlFor="input-list">Add New List</label>
			<input id="input-list"></input>
			<button className="btn">Add</button>
		</form>
		
	)
}