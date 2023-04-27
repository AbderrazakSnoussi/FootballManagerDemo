import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import TeamTable from './TeamTable';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = await fetch('./api/teams');
      const data = await response.json();
      setTeams(data);
    }

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Season Football League</h1>
      <TeamTable teams={teams} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
