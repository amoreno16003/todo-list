import logo from './logo.svg';
import MyList from './MyList';
import './App.css';

function App() {

  const todolist = ["buy icecream", 'get sushi', 'get dogfood'];
  
  return (
    <div className="App">
      <MyList theTodolist={todolist}/>
    </div>
  );
}

export default App;
