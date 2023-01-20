import './App.css';
import Weather from './components/Weather';
import TitleBar from './components/TitleBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
    <TopBar />
    <TitleBar />
      <Weather />
    </div>
  );
}

export default App;
