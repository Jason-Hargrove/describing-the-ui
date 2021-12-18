import './App.css';
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import { Jason } from "./components/Gallery";
import ToDoList from "./components/ToDoList";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <Profile />
      <Gallery />
      <Jason />
      <ToDoList />
      <Bio />
    </div>
  );
}

// Left off at Writing Markup with JSX
// https://beta.reactjs.org/learn/writing-markup-with-jsx

export default App;
