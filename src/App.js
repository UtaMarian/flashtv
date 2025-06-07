import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import ClubWorldCup from "./pages/ClubWorldCup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stire/:slug" element={<NewsDetail />} />
        <Route path="/clubworldcup" element={<ClubWorldCup />} />
      </Routes>
    </Router>
  );
}

export default App;
