import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>Welcome to La Liga Tournament Simulator</h1>
      <Link to="/team-selection">Select Your Team</Link>
    </div>
  );
}

export default MainPage;
