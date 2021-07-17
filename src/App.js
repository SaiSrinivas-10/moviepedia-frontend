import {Switch,BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Routes/>        
        
        </Switch>     
      </Router> 
    </div>
  );
}

export default App;
