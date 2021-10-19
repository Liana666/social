import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Content from './component/Content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogContainer from './component/Dialog/DialogContainer';
import UsersContainer from './component/User/UsersContainer';



function App(props) {


  return (

    <div className="App">
      <div className="cart">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/dialog' render={() => <DialogContainer />}></Route>
          <Route path='/content' render={() => <Content />}></Route>
          <Route path='/users' render={() => <UsersContainer />}></Route>
        </div>

      </div>

    </div >


  );
}


export default App;
