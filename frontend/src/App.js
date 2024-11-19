import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* Add other routes */}
      </Switch>
    </Router>
  );
}

export default App;

