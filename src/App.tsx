import { Switch, Route, Redirect } from "react-router-dom";

import { FavoritesPage } from "./pages/FavoritePage";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./pages/NavBar";

export const ROUTES_HOME = "/";
export const ROUTES_FAVORITES = "/favorites";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={ROUTES_HOME} component={HomePage} />
        <Route exact path={ROUTES_FAVORITES} component={FavoritesPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
