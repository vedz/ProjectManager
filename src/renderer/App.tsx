import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import ClassGenerator from './components/ClassGenerator/ClassGenerator';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classGenerator" element={<ClassGenerator />} />
        </Routes>
      </Router>
    </div>
  );
}
