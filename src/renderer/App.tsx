import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import 'antd/dist/reset.css';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}
