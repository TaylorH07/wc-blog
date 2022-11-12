import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar'
import SinglePage from './pages/singlePage/SinglePage';
import WritePost from './pages/writePost/WritePost';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './register/Register';

function App() {
  return (
    <>
      <NavBar/>
      <Register/>
    </>
  );
}

export default App;
