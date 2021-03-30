import './App.css';
import Chip from './Components/Functional/Chip';
import ChipC from './Components/Class/Chip';

function App() {
  return (
    <div className="container">
      <Chip title="Functional Chip"/>
      <ChipC title="Class Chip"/>
    </div>
  );
}

export default App;
