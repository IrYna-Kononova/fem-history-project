import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import History from './components/History';
import Myths from './components/Myths';
import Resources from './components/Resources';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/myths" element={<Myths />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  </Router>

);

export default App;
