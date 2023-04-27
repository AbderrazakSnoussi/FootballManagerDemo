const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data for teams
const teams = [
  { id: 1, name: 'Barcelona', points: 12 },
  { id: 2, name: 'Real Madrid', points: 10 },
  { id: 3, name: 'Atletico Madrid', points: 9 },
  { id: 4, name: 'Sevilla', points: 9 },
  { id: 5, name: 'Valencia', points: 7 },
  { id: 6, name: 'Villareal', points: 6 },
  { id: 7, name: 'Real Sociedad', points: 6 },
  { id: 8, name: 'Athletic Bilbao', points: 6 },
  { id: 9, name: 'Real Betis', points: 5 },
  { id: 10, name: 'Getafe', points: 5 },
  { id: 11, name: 'Espanyol', points: 4 },
  { id: 12, name: 'Celta Vigo', points: 4 },
  { id: 13, name: 'Alaves', points: 4 },
  { id: 14, name: 'Levante', points: 4 },
  { id: 15, name: 'Leganes', points: 3 },
  { id: 16, name: 'Eibar', points: 3 },
  { id: 17, name: 'Girona', points: 2 },
  { id: 18, name: 'Valladolid', points: 2 },
  { id: 19, name: 'Huesca', points: 2 },
  { id: 20, name: 'Rayo Vallecano', points: 1 },
];

// Endpoint to get all teams
app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
