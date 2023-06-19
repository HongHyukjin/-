import React from 'react';
import MainComponent from './wrap/MainComponent';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import SignupComponent from './wrap/SignupComponent';
import LoginComponent from './wrap/LoginComponent';
import NoticeComponent from './wrap/NoticeComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainComponent />} />
          <Route path='/home' element={<MainComponent />} />
          <Route path='/signup' element={<SignupComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/notice' element={<NoticeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

