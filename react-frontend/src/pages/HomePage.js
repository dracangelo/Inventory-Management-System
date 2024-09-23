import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to SmartStock</h1>
      <p>Manage your inventory with ease using our smart inventory management system.</p>
      <div className="cta-container">
        <Link to="/inventory" className="cta-button">View Inventory</Link>
      </div>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Easy item addition and removal</li>
          <li>Real-time inventory updates</li>
          <li>Categorize and describe your items</li>
          <li>Track quantities and unit prices</li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;