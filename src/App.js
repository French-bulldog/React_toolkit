import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Notice from './components/Notice';
import EditTodo from './components/EditTodo';
import { useSelector } from 'react-redux'


function App() {
  const todos = useSelector((state) => state.todo);
  console.log(todos);
  return (
    <div className="App">
      {
        todos.EditStatus ? <EditTodo /> : <AddTodo />
      }
      <Todos />
      <Notice />
    </div >
  );
}

export default App;
