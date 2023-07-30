import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames();
  }, []);
  const getGames = async () => {
    const response = await axios.get("http://localhost:5000/games");
    setGames(response.data);
  };
  const deleteGame = async (uuid) => {
    await axios.delete(`http://localhost:5000/games/${uuid}`);
    getGames();
  };
  return (
    <div>
      <h1 className="title">Games</h1>
      <h2 className="subtitle">List of games</h2>
      <Link to={"/games/add"} className="button is-primary mb-2">
        Add Games
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Developer</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game_list, index) => (
            <tr key={game_list.uuid}>
              <td>{index + 1}</td>
              <td>{game_list.name}</td>
              <td>{game_list.develop}</td>
              <td>{game_list.price}</td>
              <td>
                <Link
                  to={`/games/edit/${game_list.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteGame(game_list.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
