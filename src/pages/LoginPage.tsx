import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PASSWORD = 'admin123';

export default function LoginPage() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (input === PASSWORD) {
      localStorage.setItem('authenticated', 'true');
      navigate('/clock');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Enter Admin Password</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          style={{ padding: 8 }}
        />
        <br />
        <button type="submit" style={{ padding: 10, marginTop: 10 }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
