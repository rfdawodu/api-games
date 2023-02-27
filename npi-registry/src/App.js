import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("https://www.balldontlie.io/api/v1/games").then((response) => {
      setGames(response.data.data);
    });
  }, []);
  return (
    <div className="App">
      <div>
        <h1>FootBall Games</h1>
        <ol>
          {games.map((game) => (
            <li key={game.id}>
              {game.home_team.full_name} vs. {game.visitor_team.full_name} (
              {game.status})
              <div>
                <h3>home team score..</h3> {game.home_team_score}
                <h3>visitor team score...</h3>
                {game.visitor_team_score}
              </div>
            </li>
          ))}
        </ol>
      </div>
      )
    </div>
  );
}

export default App;
