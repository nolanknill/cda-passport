import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import PostsPage from './pages/PostsPage';
import AuthFailPage from './pages/AuthFailPage';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/posts" component={PostsPage}/>
          <Route path="/auth-fail" component={AuthFailPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;