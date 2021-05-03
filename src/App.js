import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
