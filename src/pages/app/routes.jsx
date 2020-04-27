import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from '../home-page';
import CategoryPage from '../category-page';
import QuizPage from '../quiz-page';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/games'>
        <HomePage />
      </Route>
      <Route exact path='/categories'>
        <HomePage />
      </Route>
      <Route path='/category/:id'>
        <CategoryPage />
      </Route>
      <Route exact path='/quiz/:id'>
        <QuizPage />
      </Route>
    </Switch>
  )
};

export default Routes;
