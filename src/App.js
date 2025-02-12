import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import { Container } from "@material-ui/core";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/trending" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      {location.pathname !== "/" && <SimpleBottomNavigation />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
