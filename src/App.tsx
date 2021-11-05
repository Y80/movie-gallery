import React from 'react';
import '@/styles/app.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from '@/components/Header';
import Search from '@/pages/Search';
import List from '@/pages/List';
import Detail from '@/pages/Detail';

export default function App() {
  return (
    <div className="App">
<!--       <BrowserRouter basename="/movie-gallery"> -->
      <BrowserRouter >
        <Header />
        <Switch>
          <Redirect path="/" to="/home" exact />
          <Route path="/list/:searchValue" render={() => <List />} />
          <Route path="/home" component={Home} />
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
