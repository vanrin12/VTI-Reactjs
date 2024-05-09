import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { store } from './store';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
