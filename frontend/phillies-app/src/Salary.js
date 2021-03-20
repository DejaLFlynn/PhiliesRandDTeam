import React, { useState, useEffect } from "react";
import axios from "axios";

const Salary = () => {
  const [player, setPlayer] = useState([]);

  const getPlayers = async () => {
    const playerProfile = `http://localhost:3000/players`;
    try {
      let res = await axios.get(playerProfile);

      setPlayer(res.data.users);
      if (null) {
        return 0;
      }
    } catch (error) {
      setPlayer("");
    }
  };
  useEffect(() => {
    getPlayers();
  }, []);

  // const topPlayersSalary = player.sort((a,b)=>b-a).slice(0, 125)

  let displayPlayers = player.map((play) => {
    return (
      <div className="userGridImageContainer" key={play.id}>
        <h3>Name:{play.name}</h3>
        <p>Salary: {play.salary}</p>
      </div>
    );
  });

  return (
    <div className="playerInfo">
      {/* {topPlayersSalary} */}
      {displayPlayers}
    </div>
  );
};

export default Salary;
