import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import store from './store/index.js';
import './App.css';
import { Row, Col } from 'antd';
import Header from './components/header';
import SideBar from './components/sideBar';
import List from './components/list';
import Login from './components/login';


class App extends Component {
  render() {
    return (
      <Fragment>
       <Provider store = {store}>
        <HashRouter>
          <Route path='/'  exact >
            <Row style={{"padding":"10px 0","backgroundColor":"#fff"}}>
              <Col span={24}><Header /></Col>
            </Row>
            <Row>
              <Col xs={{span:0}} md={{span:4}} style={{"height":"100%"}}><SideBar /></Col>
              <Col xs={{span:24}} md={{span:20}} style={{"paddingLeft":"20px"}}><List /></Col>
            </Row>
          </Route>
          <Route path='/login'  exact component={Login}></Route>
        </HashRouter>
	     </Provider>
      </Fragment>
    );
  }
}

export default App;