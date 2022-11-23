import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps"
import StatefulGreeting from "./components/StatefulGreeting"

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting/>
    </div>
  );
}

export default App;
