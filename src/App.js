//Style
import "./styles/app.scss";
//Components
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search&query=:id">
          <SearchResults />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
