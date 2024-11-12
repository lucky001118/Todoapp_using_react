import Header from './components/Header';
import Todo from './components/Todo'
import "./App.css"

function App() {
  return (
    <div className="App">
      {/* importing the Todo component */}
      <Header />
      <Todo/>   
    </div>
  );
}

export default App
