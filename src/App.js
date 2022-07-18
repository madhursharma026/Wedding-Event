import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from "./Components/Homepage/Homepage";
import HomepageMeeting from './Components/HomepageMeeting/HomepageMeeting';
import HomepageParty from './Components/HomepageParty/HomepageParty';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/homepage_party">
          <HomepageParty />
        </Route>
        <Route exact path="/homepage_meeting">
          <HomepageMeeting />
        </Route>
      </Router>
    </>
  );
}

export default App;