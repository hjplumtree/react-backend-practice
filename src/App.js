import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
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
        <Route path="/read/:id" element={<Read />} />
        <Route path="/create" element={<Create></Create>} />
      </Routes>
      <Control></Control>
    </div>
  );
}

function Create() {
  return (
    <article>
      <h2>Create</h2>
      <form>
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </article>
  );
}

function Control() {
  return (
    <ul>
      <li>
        <Link to="/create">create</Link>
      </li>
    </ul>
  );
}

export default App;
