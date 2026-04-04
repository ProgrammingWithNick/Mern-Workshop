import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Map from "./components/Map"; 

function App() {
  return (
    <div className="App">
      <h1>App</h1>

      <Router>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/map">Map</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;