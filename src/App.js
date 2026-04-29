import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg"; // 👉 replace with your uploaded logo file

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
      <div className="glass-card">
        {/* Logo */}
        <img src={logo} alt="LifeOn+" className="logo" />

        {/* Title */}
        <h1 className="title">
          Welcome to the world’s most advanced medical & digital healthcare
          ecosystem
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          Experience next-generation health technology. Launching shortly.
        </p>

        {/* Features */}
        <div className="features">
          <span>🩺 Digital Emergency Health Kit</span>
          <span>🔬 Invasive Body Screening</span>
          <span>📡 Contactless Body Screening</span>
          <span>⌚ Wearable Digital Products</span>
        </div>

        {/* Coming Soon */}
        <h2 className="coming">🚀 Coming Soon</h2>

        {/* Timer */}
        <div className="timer">
          <div className="time-box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
