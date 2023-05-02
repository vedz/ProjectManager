import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';

export default function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}
