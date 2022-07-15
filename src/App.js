import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/party">
          <Homepage />
        </Route>
        <Route exact path="/meeting">
          <Homepage />
        </Route>
      </Router>
    </>
  );
}

export default App;
