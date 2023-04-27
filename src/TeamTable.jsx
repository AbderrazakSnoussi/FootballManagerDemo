import React, { useState, useEffect } from 'react';

const TeamTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch teams data from API and set it in state
    const fetchData = async () => {
      const response = await fetch('https://example.com/api/teams');
      const data = await response.json();
      setTeams(data);
    };
    fetchData();
  }, []);

  const sortTeams = () => {
    // Sort teams by points, goal difference, and goals scored
    teams.sort((a, b) => {
      if (a.points > b.points) {
        return -1;
      } else if (a.points < b.points) {
        return 1;
      } else {
        const aDiff = a.goalsFor - a.goalsAgainst;
        const bDiff = b.goalsFor - b.goalsAgainst;
        if (aDiff > bDiff) {
          return -1;
        } else if (aDiff < bDiff) {
          return 1;
        } else {
          if (a.goalsFor > b.goalsFor) {
            return -1;
          } else if (a.goalsFor < b.goalsFor) {
            return 1;
          }
        }
      }
      return 0;
    });
  };

  // Call sortTeams() function when teams state updates
  useEffect(() => {
    sortTeams();
  }, [teams]);

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team Name</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>Goals For</th>
          <th>Goals Against</th>
          <th>Goal Difference</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.id}>
            <td>{index + 1}</td>
            <td>{team.name}</td>
            <td>{team.played}</td>
            <td>{team.won}</td>
            <td>{team.drawn}</td>
            <td>{team.lost}</td>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
            <td>{team.goalsFor - team.goalsAgainst}</td>
            <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamTable;
