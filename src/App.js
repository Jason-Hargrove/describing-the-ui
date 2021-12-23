import './App.css';
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import { Jason } from "./components/Gallery";
import ToDoList from "./components/ToDoList";
import Bio from "./components/Bio";
import Avatar2 from "./components/Avatar2";
import Profile3 from "./components/Profile3";
import Profile4 from "./components/GalleryExtract";
import AdjImgSize from "./components/AdjImgSize";

function App() {
  return (
    <div className="App">
      <Profile />
      <Gallery />
      <Jason />
      <ToDoList />
      <Bio />
      <Avatar2 />
      <Profile3 />
      <Profile4 />
      <AdjImgSize />
    </div>
  );
}

// Left off at JavaScript in JSX with Curly Braces
// https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-bracesx

export default App;
