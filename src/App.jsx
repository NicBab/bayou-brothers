import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Header } from './components/index'
import { Home, AboutUs, Gallery } from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
