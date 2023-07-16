import React from 'react';
import MainComponent from './wrap/MainComponent';
import {BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom';
import SignupComponent from './wrap/SignupComponent';
import LoginComponent from './wrap/LoginComponent';
import NoticeComponent from './wrap/NoticeComponent';
import PostListComponent from './wrap/PostListComponent';
import PostComponent from './wrap/PostComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
      <HashRouter>
        <Routes>
          <Route index element={<MainComponent />} />
          <Route path='/home' element={<MainComponent />} />
          <Route path='/signup' element={<SignupComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/notice' element={<NoticeComponent />} />
          <Route path='/postlist' element={<PostListComponent />} />
          <Route path='/post' element={<PostComponent />} />
        </Routes>
        </HashRouter>
    </div>
  );
};

