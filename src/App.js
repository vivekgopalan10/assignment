import { Route, BrowserRouter as Router , Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';
import Dashboard from './page/dashboard';
import Wishlist from './page/wishlist';
import Cart from './page/cart';
import VirtualPage from './page/virtualPage';
import './App.css';

function App() {
  return (

    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/wishlist' component={Wishlist}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/virtualpage' component={VirtualPage}/>

        </Switch>
      </Router>
    </Provider>
  
  );
}

export default App;
