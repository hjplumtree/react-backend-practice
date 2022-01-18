import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Read() {
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
