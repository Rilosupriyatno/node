import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddGame = () => {
  const [name, setName] = useState("Mobile Legend");
  const [develop, setDevelop] = useState("Moonton");
  const [price, setPrice] = useState("200000");
  const navigate = useNavigate();

  const saveGame = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/games", {
        name,
        develop,
        price,
      });
      navigate("/games");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveGame}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Develop</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={develop}
                onChange={(e) => setDevelop(e.target.value)}
                placeholder="Develop"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
