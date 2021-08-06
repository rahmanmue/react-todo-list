import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import TodoList from './Pages/TodoList';
import TodoList from './Pages/TodoListClass';
import { ThemeProvider } from "@emotion/react";


// halaman about
import About from "./Pages/About";

const theme = {
  color : {
    primary : {
      hitam : "#2d2d2d",
      merah : "#e06262"
    }
  },
  background:{
    color :{
      primary : "#f2eecb"
    }
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
      {/* <TodoList /> */}
    </ThemeProvider>
  );
}


export default App;
