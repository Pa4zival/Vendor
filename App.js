import Home from "./components/Home" 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Add from "./components/Add"
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Add></Add>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
