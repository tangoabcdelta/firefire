import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";


import Projects from "./pages/Projects";
import Fats from "./pages/Fats";


import TweetSaver from "./components/TweetSaver";
import ToDoList from "./components/ToDoList";
import StateDemo from "./components/StateDemo";
import ArchiveIt from "./components/ArchiveIt";
import AutorizedArchiveIt from "./components/AutorizedArchiveIt";
import PrivateRoute from "./routes/PrivateRoute";


import Input from "./atoms/input.text";


import store from "./store/Generic";
import UserStore from "./store/UserStore";

import "./App.css";
import logo from "./logo.svg";

//class App extends React.Component {
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      secondsSinceLastRefresh: 0,
      name: ''
    };
  }
  
  componentDidMount() {
    this.changeNameInChild.bind(this);
  }
  
  changeNameInChild(e){
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  render() {
    let secondsSinceLastRefresh = this.state.secondsSinceLastRefresh;
    setTimeout(() => {
      secondsSinceLastRefresh++;
      //this.setState({
      //  secondsSinceLastRefresh: secondsSinceLastRefresh
      //});
    }, 1000);

    return (
      <div className="App">
        <header className="App-header">
          <div className="time-indicator">
            <Input type='text' placeholder={'change title here'} onChange={this.changeNameInChild.bind(this)} />
             &nbsp;  
            Time elapsed since last refresh : <span>{this.state.secondsSinceLastRefresh}</span>s 
          </div>
        </header>
        <Navigation />
        <section className="App-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/input"
              exact
              render={() => <Redirect to="projects/tweet-saver" />}
            />
            

            <Route path="/projects/fats" render={() => <Fats />} />
            <Route path="/projects/todo" render={() => <ToDoList />} />
            <Route path="/projects/tweet-saver" render={() => <TweetSaver />} />
            <Route path="/projects/archive-it" render={() => <ArchiveIt />} />
            <Route path="/demos/state-demo" render={() => <StateDemo name={this.state.name} time={this.state.secondsSinceLastRefresh} />} />
            <Route path="/login" render={() => <Login />} />
            <PrivateRoute
              path="/authorized/archive-it"
              render={() => <AutorizedArchiveIt />}
            />
          </Switch>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
