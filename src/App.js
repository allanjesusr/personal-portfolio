import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './components/NavbarComponent';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
