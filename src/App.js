import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContent from './components/Content/Profile/ProfileContent';
import Massages from './components/Content/Massages/Massages';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import {Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/Profile' render={() => <div>Content</div>}/>
                    <Route exact path='/Massages/*' element={<Massages/>}/>
                    <Route exact path='/News' element={<News/>}/>
                    <Route exact path='/Music' element={<Music/>}/>
                    <Route exact path='/Settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
