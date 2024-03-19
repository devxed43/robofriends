import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
// import ErrorBoundry from "./ErrorBoundry";

const App = () => {
  // State
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  // API Fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  // On Search Input Change
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  // Filter Robots
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  // If robots exist checker
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      {count}
      <br />
      <button onClick={handleClick}>Click Me</button>
      <SearchBox searchChange={onSearchChange} />

      <Scroll>
        {/* <ErrorBoundry> */}
        <CardList robots={filteredRobots} />
        {/* </ErrorBoundry> */}
      </Scroll>
    </div>
  );
};

export default App;
