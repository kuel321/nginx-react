import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent';
import ImageUploadComponent from './UploadComponent';
import FetchTasks from './FetchTasks'
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <ImageUploadComponent />
       <FetchTasks />
      </header>
    </div>
  );
}

export default App;
