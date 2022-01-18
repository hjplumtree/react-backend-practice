import "./App.css";
import { Article } from "./Article";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useParams } from "react-router-dom";

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

function Read() {
  const { id } = useParams();
  const [topic, setTopics] = useState();
  useEffect(() => {
    setTopics(undefined);
    fetch("http://localhost:3333/topics/" + id)
      .then((type) => type.json())
      .then((result) => setTopics(result));
  }, [id]);
  if (topic === undefined) {
    return <>Loading...</>;
  }
  return (
    <article>
      <h1>{topic.title}</h1>
      {topic.body}
    </article>
  );
}

export default App;
