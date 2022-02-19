import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Navbar.css";
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShopAll from "./Components/ShopAll/ShopAll";
import OurCraft from "./Components/OurCraft/OurCraft";
import OurStory from "./Components/OurStory/OurStory";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/ShopAll">
            <ShopAll />
          </Route>
          <Route path="/OurStory">
            <OurStory />
          </Route>
          <Route path="/OurCraft">
            <OurCraft />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
