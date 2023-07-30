import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditGame = () => {
  const [name, setName] = useState("");
  const [develop, setDevelop] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   const getGamesById = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/games/${id}`);
  //       setName(response.data.name);
  //       setDevelop(response.data.develop);
  //       setPrice(response.data.price);
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getGamesById();
  // }, [id]);

  const updateGames = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/games/${id}`, {
        name: name,
        develop: develop,
        price: price,
      });
      navigate("/games");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Games</h1>
      <h2 className="subtitle">Edit Games</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateGames}>
              <p className="has-text-centered">{msg}</p>
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
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGame;
