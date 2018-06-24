import React, {Component, Fragment} from 'react';
import InputUser from './components/InputUser';
import User from './components/User'
import Tabs from './components/Tabs'
import {Provider} from "react-redux";
import store from './store/store'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Fragment>
              <InputUser />
              <div className='main' >
                  <section className="user-section">
                      <User />
                  </section>
                  <section className="tabs-section">
                      <Tabs />
                  </section>
              </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
