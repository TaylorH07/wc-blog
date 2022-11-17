import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar'
import SinglePage from './pages/singlePage/SinglePage';
import WritePost from './pages/writePost/WritePost';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './register/Register';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>

        <Route path="/login">
          {user ? <Home/> : <Login/>}
        </Route>        

        <Route path="/writePost">
          {user ? <WritePost/> : <Register/>}
        </Route>      
        
        <Route path="/settings">
          {user ? <Settings /> : <Register/>}
        </Route>

        <Route path="/post/:postId">
          <SinglePage/>
        </Route>   

      </Switch>
    </Router>
  );
}

export default App;
