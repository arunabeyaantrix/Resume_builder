import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Header/Navbar";
import Home from "./Components/Home";
import {Provider} from 'react-redux';
import {ConfigureStore} from './store/store'

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
