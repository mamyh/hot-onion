import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/Register/Register";
import Footer from "./pages/shared/footer/Footer";
import Header from "./pages/shared/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/"><Home /></Route>

        <Route path="/home"><Home /></Route>

        <Route path="/login"><Login></Login></Route>

        <Route path="/register"><Register></Register></Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
