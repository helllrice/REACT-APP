import './App.css';
import Filters from './components/filters/Filters';
import Sorting from './components/sorting/Sorting';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
        <Sorting />
    <div className="Items">
        <Filters />
        <Cards />
    </div>
    </div>
  );
}

export default App;
