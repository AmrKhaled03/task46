
import './App.css';
import Buttons from './components/Buttons';
import ContextApi from './components/ContextApi';
import List from './components/List';
import People from './components/People';
function App() {
  return (
    <ContextApi>
      <div className="App p-5">
   <List />
   <People/>
   <Buttons/>
    </div>
    </ContextApi>
    
  );
}

export default App;
