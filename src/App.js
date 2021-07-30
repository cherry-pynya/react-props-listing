import './App.css';
import Listing from './Listing/Listing';
import * as data from './etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={data.default} />
    </div>
  );
}

export default App;
