import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return <div>Let's go</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
