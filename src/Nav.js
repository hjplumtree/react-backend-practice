import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Nav() {
  const topics = useSelector((state) => state.topics);

  const lis = topics.map((ele) => (
    <li key={ele.id}>
      <Link to={`/read/${ele.id}`}>{ele.title}</Link>
    </li>
  ));
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  );
}
