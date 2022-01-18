import "./App.css";
import { Article } from "./Article";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3333/topics")
      .then((type) => type.json())
      .then((result) => {
        console.log(result);
        dispatch({ type: "SET_TOPICS", topics: result });
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
