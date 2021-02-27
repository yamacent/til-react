import Home from './Home';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Play from './Play';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/play" exact>
          <Play />
        </Route>
      </Switch>
    </div>
  )
}
