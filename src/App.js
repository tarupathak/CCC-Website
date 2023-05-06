import { Route, Routes } from "react-router-dom";
import Home from './Home Page/Home';
import Activities from './Pages/Activities';
import Team from './Pages/Team';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Activity" element={<Activities/>} />
      <Route path="/Team" element={<Team />} />
    </Routes>
    </div>
  );
}

export default App;