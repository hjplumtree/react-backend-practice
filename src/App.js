import "./App.css";
import { Article } from "./Article";
import { Header } from "./Header";
import { Nav } from "./Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
