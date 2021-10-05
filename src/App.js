import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Content from './component/Content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogContainer from './component/Dialog/DialogContainer';



function App(props) {


  return (
    <BrowserRouter>
      <div className="App">
        <div className="cart">
          <Header />
          <Navbar />
          <div className="content">
            <Route path='/dialog' render={() => <DialogContainer />}></Route>
            <Route path='/content' render={() => <Content />}></Route>
          </div>

        </div>

      </div >
    </BrowserRouter>

  );
}


export default App;
