import { useState, useEffect } from "react";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState();
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res) => {
      setBeers(res.data);
    });
  }, []);
  if (!beers) return <p>Loading...</p>;
  return (
    <ul>
      {beers.map((element) => {
        return <li key={element._id}>{element.name}</li>;
      })}
    </ul>
  );
}

export default AllBeersPage;
