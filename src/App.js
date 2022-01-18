import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
  const dispatch = useDispatch();
  const go = useNavigate();
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          const newTopic = await postTopic(evt);
          go("/read/" + newTopic.id);
          const response = await fetch("http://localhost:3333/topics");
          const result2 = await response.json();
          dispatch({ type: "SET_TOPICS", topics: result2 });
        }}
      >
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

  async function postTopic(evt) {
    const response = await fetch("http://localhost:3333/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: evt.target.title.value,
        body: evt.target.body.value,
      }),
    });
    const result = await response.json();
    return result;
  }
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
