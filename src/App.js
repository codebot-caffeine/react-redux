import logo from './logo.svg';
import './App.css';
//redux imports
import { Count } from './components/counter';


function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Count />
    </div>
    // </Provider>
  );
}

export default App;
