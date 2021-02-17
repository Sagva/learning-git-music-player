import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
