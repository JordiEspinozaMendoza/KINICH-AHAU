import "./App.scss";

//* Importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "screens/HomeScreen";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
