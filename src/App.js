import "./App.css";
import { Article } from "./Article";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

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

      <Routes>
        <Route
          path="/"
          element={
            <article>
              <h1>Welcome</h1>Hello, Web
            </article>
          }
        />
        <Route
          path="/read/:id"
          element={
            <article>
              <h1>Read</h1>Hello!
            </article>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
