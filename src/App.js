import React from 'react';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/landingpage">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;