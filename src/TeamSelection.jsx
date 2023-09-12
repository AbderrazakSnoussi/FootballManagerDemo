import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TeamSelection() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch the list of available teams from your backend API
    // Update the 'teams' state with the fetched data
  }, []);

  return (
    <div>
      <h2>Select Your Team</h2>
      <ul>
        {teams.map((team) => (
          <li key={team._id}>
            <Link to={`/team/${team._id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamSelection;
