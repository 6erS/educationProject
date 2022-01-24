import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './data/state'

ReactDOM.render(
    <App
        profileInfo={state.ProfilePage.ProfileInfoData}
        profilePosts={state.ProfilePage.PostsData}
        eachMassages={state.MassagesPage.massages}
        dialogList={state.MassagesPage.dialogListDATA}
    />,
  document.getElementById('root')
);