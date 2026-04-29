import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const targetDate = new Date("June 18, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="main">
      <div className="container">
        {/* Logo */}
        <img src="/logo.png" alt="LifeOn+" className="logo" />

        {/* Heading */}
        <h1 className="title">
          Welcome to the world’s most advanced medical and digital healthcare
          technological products and services
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          Come and join us for the experience. Launching shortly.
        </p>

        {/* Features */}
        <div className="features">
          <div className="feature-card">🩺 Digital Emergency Health Kit</div>
          <div className="feature-card">🔬 Invasive Body Screening</div>
          <div className="feature-card">
            📡 Non-invasive and contactless body screening technologies
          </div>
          <div className="feature-card">⌚ Wearable Digital Products</div>
        </div>

        {/* Coming Soon */}
        <h3 className="coming">🚀 Coming Soon</h3>

        {/* Timer */}
        <div className="timer">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
            <div key={unit} className="time-box">
              <span>{timeLeft[unit.toLowerCase()]}</span>
              <p>{unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
