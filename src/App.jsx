import { useState } from "react";

import "./App.css";
import { useEffect } from "react";
import axios from "./axios";

const API = "https://jsonplaceholder.typicode.com";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  //using-PROMISES

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  //USING- ASYNC-AWAIT

  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: 40,
        }}
      >
        axios project
      </h2>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 20).toUpperCase()}</h2>
              <p>{body.slice(0, 120)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
