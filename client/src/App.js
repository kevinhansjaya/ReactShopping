import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/ItemModel';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import { loadUser } from "./actions/authAction";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('6. calling componentDidMount and loadUser in app.js');
    store.dispatch(loadUser());
  }

  render() {  console.log('render app.js first');
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModel />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  };

}

export default App;