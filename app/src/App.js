import logo from './logo.svg';
import './App.css';
import Login from 'components/Login';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';

const router = createBrowserRouter([
  { path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
  ]);
function App () {
  return (
    <div className="bg-zinc-50 h-max min-h-screen w-full">
      <Login />
    </div>
  );
}
export default App;


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

//export default App;
