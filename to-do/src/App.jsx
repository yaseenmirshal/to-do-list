import { useState } from 'react';
import './App.css';      

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const deleteHandler = (obj) => {
    let data = toDos.filter((item) => {
      return item !== obj;
    });
    setTodos(data);
  };
  const handleButtonClick = () => {
    if (toDo.trim().length > 0) {
      const id = Date.now();
      setTodos([...toDos, { id, text: toDo, status: false }]);
      setTodo('');
    }
  };
  
  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Embrace your day ✨</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleButtonClick} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={() => handleCheckboxChange(obj.id)}
                checked={obj.status}
                type="checkbox"
              />
              <p style={{ textDecoration: obj.status ? 'line-through' : 'none', color: obj.status ? 'gray' : 'white' }}>
                {obj.text}
              </p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => deleteHandler(obj)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;