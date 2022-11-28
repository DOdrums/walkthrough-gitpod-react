import './App.css';
import ConditionalRederingClass from "./components/ConditionalRenderingClass"
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional"

function App() {
  return (
    <div className="App">
       <ConditionalRederingClass/> 
       <ConditionalRenderingFunctional connected={false}/>
    </div>
  );
}

export default App;
