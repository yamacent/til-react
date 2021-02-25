import Home from './Home';
import './App.css';
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
