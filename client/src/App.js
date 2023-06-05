import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./componetns/Nav/Nav";
import Home from "./componetns/Home/Home";
import Landing from "./componetns/Landing/Landing";
import Pokebola from "./componetns/Pokebola/Pokebola";
import Pokemons from "./componetns/Pokemons/Pokemons";
import About from "./componetns/About/About";






function App() {
  const location = useLocation().pathname;
  return (
    <div className="App">
      {location !== "/" && location !== "/about" ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/pokebola" element={<Pokebola />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
