import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:4001/users/welcome", {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token"),
        },
      });
      console.log(result.data);
      setUser(result.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <p>Id: {user.user_id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Home;
