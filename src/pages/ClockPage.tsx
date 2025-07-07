import { useEffect, useState } from 'react';
import { db } from '../firebase.ts'; // ✅ Explicit .ts extension to avoid Vite error
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function ClockPage() {
  const [payroll, setPayroll] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ Debug Firebase connection
  useEffect(() => {
    console.log('✅ Firebase DB connected:', db);
  }, []);

  const handleClock = async (type: 'Clock In' | 'Clock Out') => {
    if (!payroll.trim()) {
      alert('Please enter your payroll number');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'clockins'), {
        payroll: payroll.trim(),
        type,
        time: Timestamp.now(),
      });

      alert(`${type} recorded for ${payroll}`);
      setPayroll('');
    } catch (error) {
      console.error('❌ Firestore error:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>🕒 Clock In / Clock Out</h1>
      <input
        type="text"
        value={payroll}
        onChange={(e) => setPayroll(e.target.value)}
        placeholder="Enter Payroll Number"
        disabled={loading}
        style={{ padding: 10, width: 250, fontSize: 16 }}
      />
      <br />
      <button
        onClick={() => handleClock('Clock In')}
        disabled={loading}
        style={{ padding: 12, marginTop: 15, marginRight: 10 }}
      >
        Clock In
      </button>
      <button
        onClick={() => handleClock('Clock Out')}
        disabled={loading}
        style={{ padding: 12, marginTop: 15 }}
      >
        Clock Out
      </button>
    </div>
  );
}
