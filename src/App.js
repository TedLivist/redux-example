import './App.css';
import { Provider } from 'react-redux';
import Postform from './components/Postform';
import Posts from './components/Posts';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
