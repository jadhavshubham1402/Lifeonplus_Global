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
    <div className="main" style={{ backgroundImage: `url(/background.jpeg)` }}>
      <div className="overlay">
        <div className="container">
          <img src="/logo.png" alt="LifeOn+ Global Lifeline" className="logo" />

          <h2 className="title">
            Welcome to the world’s most advanced medical and digital
            <br />
            healthcare technological products and services
          </h2>

          <p className="subtitle">
            Come and join us for the experience. Launching shortly.
          </p>

        {/* Features */}
        <div className="features">
          <div className="feature-card">🩺 Digital Emergency Health Kit</div>

          <div className="feature-card">🔬 Invasive Body Screening</div>

          <div className="feature-card">📡 Non-invasive Body Screening</div>

          <div className="feature-card">🤖 Contactless / AI Body Screening</div>

          <div className="feature-card">
            ⌚ Wearable Digital Health Products
          </div>

          <div className="feature-card">🍀 Food Supplements</div>
        </div>

          <h3 className="coming">🚀 Coming Soon</h3>

          <div className="timer">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="time-box">
                <span>{value.toString().padStart(2, "0")}</span>
                <p>{unit.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
