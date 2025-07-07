import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ClockPage from './pages/ClockPage';

function App() {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/clock"
        element={isAuthenticated ? <ClockPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
