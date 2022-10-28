import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import VotosRegion from "./pages/votos-region/VotosRegion";
import VotosDistrito from "./pages/votos-distrito/VotosDistrito";
import VotosDepartamento from "./pages/votos-departamento/VotosDepartamento";
import VotosValidos from "./pages/votos-validos/VotosValidos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<VotosValidos />} />
          <Route path="/region" element={<VotosRegion />} />
          <Route path="/distrito" element={<VotosDistrito />} />
          <Route path="/departamento" element={<VotosDepartamento />} />
        </Routes >
      </div>
    </>
  );
}

export default App;
