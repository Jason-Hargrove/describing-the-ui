import './App.css';
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import { Jason } from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Profile />
      <Gallery />
      <Jason />
    </div>
  );
}

// Left off at Writing Markup with JSX
// https://beta.reactjs.org/learn/importing-and-exporting-components

export default App;
