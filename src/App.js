import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContent from './components/Content/Profile/ProfileContent';
import Massages from './components/Content/Massages/Massages';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path='/Profile' render={() => <ProfileContent profileInfo={props.profileInfo} profilePosts={props.profilePosts} />} />
            <Route exact path='/Massages/*' element={<Massages massages={props.eachMassages} dialogList={props.dialogList} />} />
            <Route exact path='/News' element={<News localState={props.state.NewsPage} />} />
            <Route exact path='/Music' element={<Music localState={props.state.MusicPage} />} />
            <Route exact path='/Settings' element={<Settings localState={props.state.SettingsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
