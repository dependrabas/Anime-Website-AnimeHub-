import { Routes, Route } from "react-router-dom";
import AnimeDetail from "./components/AnimeDetail";
import ContentDiv from "./components/ContentDiv";
import Navbar from "./components/Navbar";
import AnimeHistory from "./components/AnimeHistory";
import Top10 from "./components/Top10";

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<ContentDiv />} />
          <Route exact path="/:id" element={<AnimeDetail />} />
          <Route exact path="/animeHistory" element={<AnimeHistory />} />
          <Route exact path="/top10" element={<Top10 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
