import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './Form';
import Counter from './Counter';

function Index() {
    const listtodo = ["Work Out", "Learning", "Pray Taraweh", "Sleep"];
    const hours = new Date().getHours();
    const midnight = hours >= 24 || hours <= 8
    return(
        <div>
            {/* Short Circuit */}
            {!midnight && <form />}
            <h2>Todo List</h2>
            <ul className="list">
                {/* Implementasi .map */}
            {listtodo.map((item)=>(
                <li>
                    <label>
                        <input type="checkbox"></input>
                        {item}
                        <button className="btn btn-danger">Delete</button>
                    </label>
                </li>))}
            </ul>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
      
  );
