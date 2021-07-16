import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, AboutUs, Gallery, Events, ContactUs } from './pages/index'
import { Footer, Header } from './components/index'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/events" component={Events} />
          <Route path="/contact_us" component={ContactUs} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
