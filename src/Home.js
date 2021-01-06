import React from "react";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  return (
    <div>
      the home here ...
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
      >
        button
      </button>
    </div>
  );
}

export default Home;
