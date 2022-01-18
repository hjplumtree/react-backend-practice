import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Read } from "./Read";
import { Create } from "./Create";

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
      <Routes>
        <Route path="/" element={<Control></Control>}></Route>
        <Route path="/read/:id" element={<Control></Control>}></Route>
      </Routes>
    </div>
  );
}

function Control() {
  const { id } = useParams();
  let contextUI = null;
  if (id !== undefined) {
    contextUI = (
      <>
        <li>
          <Link to={"/update/" + id}>update</Link>
        </li>
      </>
    );
  }
  return (
    <ul>
      <li>
        <Link to="/create">create</Link>
      </li>
      {contextUI}
    </ul>
  );
}

export default App;
