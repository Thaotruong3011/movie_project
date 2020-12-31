import "./App.css";
import CheckOut from "./pages/checkout";
import LogIn from "./pages/login";
import Detail from "./pages/detail";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./component/signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch> */}
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/phim/:movieCode">
          <Detail />
        </Route>
        <Route path="/checkout/:showTimeCode">
          <CheckOut />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
