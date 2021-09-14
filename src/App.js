import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { notFound } from './pages/notFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';


function App() {
  return (
    <>
      <Router basename='/react-food'>
        <Header />
          <main className="content container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/category/:name" component={Category} />
              <Route path="/meal/:id" component={Recipe} />
              <Route component={notFound} />
            </Switch>
          </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
