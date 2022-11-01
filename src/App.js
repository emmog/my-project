
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Link from './component/pages/Link';
import Service from './component/pages/Service';

function App() {
  return (
      <>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/link">
          <Link/>
        </Route>
        <Route  path="/Service">
          <Service/>
        </Route>
      </Switch>
      </>
  );
}

export default App;
