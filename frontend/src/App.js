import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route component={Register} path={'/register'} />
        <Route component={Login} path={'/login'} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
