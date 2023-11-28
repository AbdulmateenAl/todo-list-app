import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [item, setItem] = useState([]);

  function addItem() {

    if (!newItem) {
      alert("Enter an item");
      return;
    }

    const items = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItem(prev => [...prev, items]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = item.filter(task => task.id !== id);
    setItem(newArray);
  }
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input
      type="text"
      placeholder='Add an item...'
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {item.map(task => {
          return (
            <li key={task.key}>{task.value} <button className='delete-button' onClick={() => deleteItem(task.id)}>❌</button> </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
