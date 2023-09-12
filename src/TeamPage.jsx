import React, { useState, useEffect } from 'react';

function TeamPage({ match }) {
  const [team, setTeam] = useState({});
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch the selected team details from your backend API based on 'match.params.teamId'
    // Fetch the scheduled games for the selected team
    // Update the 'team' and 'games' states with the fetched data
  }, [match.params.teamId]);

  return (
    <div>
      <h2>{team.name}</h2>
      <h3>Scheduled Games</h3>
      <ul>
        {games.map((game) => (
          <li key={game._id}>{/* Display game details here */}</li>
        ))}
      </ul>
      <h3>Results</h3>
      {/* Display results for the team here */}
    </div>
  );
}

export default TeamPage;
