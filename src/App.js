import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Read } from "./Read";

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

      <Routes>
        <Route
          path="/"
          element={
            <article>
              <h1>Welcome</h1>Hello, Web
            </article>
          }
        />
        <Route path="/read/:id" element={<Read></Read>} />
      </Routes>
    </div>
  );
}

export default App;
