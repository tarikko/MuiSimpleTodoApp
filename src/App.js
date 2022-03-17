import './App.css';
import './Animations/Animations.css'
import { useSelector } from 'react-redux'
import { TodoInput } from "./Components/TodoInput"
import { TodoList } from "./Components/TodoList"
import { TodoElement } from "./Components/TodoElement"

function App() {
  const TodoElements = useSelector((state) => state.todo.todos)
  return (
    <>
      <div className="Wrapper">
        <TodoList>
          { TodoElements.map(element => <TodoElement key={element.id} edit={element.edit} text={element.text} id={element.id} className={element.done == true ? "strike" : "strike-reverse"}/>) }
        </TodoList>
        <TodoInput/>
      </div>
    </>
  );
}

export default App;
