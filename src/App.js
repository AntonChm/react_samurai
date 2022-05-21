// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

// import Header from './Header.js';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />

      <Navbar />

<Profile />
      </div>  

  );
};

export default App;
