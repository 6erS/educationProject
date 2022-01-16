import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContent from './components/Content/Profile/ProfileContent';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <ProfileContent />
    </div>
  );
}

export default App;
