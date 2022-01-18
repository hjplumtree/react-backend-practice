import { useSelector } from "react-redux";
export function Nav() {
  const topics = useSelector((state) => state.topics);

  const lis = topics.map((ele) => (
    <li key={ele.id}>
      <a href={`/read/${ele.id}`}>{ele.title}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  );
}
