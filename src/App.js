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
import PassChildren from "./components/PassChildren";
import PackingList from "./components/PackingList";
import PackingList2 from "./components/PackingList2";
import DrinkList from "./components/DrinkList";
import RefactoredDrinkList from "./components/RefactoredDrinkList";
import List from "./components/List";
import List2 from "./components/List2";
import SplitList from "./components/SplitList";
import SplitListFunc from "./components/SplitListFunc";

function App() {
  return (
    <div className="App">
        <SplitListFunc />
        <SplitList />
        <List2 />
        <List />
        <RefactoredDrinkList />
        <DrinkList />
        <PackingList2 />
        <PackingList />
        <Profile />
        <Gallery />
        <Jason />
        <ToDoList />
        <Bio />
        <Avatar2 />
        <Profile3 />
        <Profile4 />
        <AdjImgSize />
        <PassChildren />
    </div>
  );
}

// Left off at Describing the UI, Rendering Lists, Try out some challenges, Splitting a list in two, second example (function).
// https://beta.reactjs.org/learn/rendering-lists

export default App;
