import './sass/main.css';
import Header from './components/header'
import Photos from './components/photos'
import Information from './components/information'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Photos />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
