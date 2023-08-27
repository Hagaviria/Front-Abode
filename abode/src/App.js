import './App.css';
import Header from './components/Headers';
import IconFilter from './components/Icon-filter';
import Cards from './components/Card/card';

function App() {
  return (
    <div className="App">
    <Header/>
    <IconFilter/>
    <Cards/>
    </div>
  );
}

export default App;