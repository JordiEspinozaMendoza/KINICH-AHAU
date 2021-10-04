import "./App.scss";

//* Importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MainPageRouter } from "routers/mainPageRouter";
import { mainTheme } from "utils/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? mainTheme : mainTheme}>
        <Switch>
          <Route exact path="/" component={MainPageRouter} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
