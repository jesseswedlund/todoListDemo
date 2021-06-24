import "../css/App.css";
import TodoList from "./TodoList";

function App() {
  const text = "I have a lot to do!";

  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">My To Do List</p>
        <TodoList text={text} />
      </header>
    </div>
  );
}

export default App;
