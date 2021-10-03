import "./App.scss";

//* Importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MainPageRouter } from "routers/mainPageRouter";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPageRouter} />
      </Switch>
    </Router>
  );
}

export default App;
