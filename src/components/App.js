import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Import user data

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} /> {/* Pass props to Home */}
      <About bio={user.bio} links={user.links} /> {/* Pass props to About */}
    </div>
  );
}

export default App;
