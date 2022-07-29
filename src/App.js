import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Insights from './components/Insights/Insights';
import ContactUs from './components/ContactUs/ContactUs';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Insights />
      <ContactUs />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
