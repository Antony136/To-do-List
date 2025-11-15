import './App.css';
import './style.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1> To-Do List </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
