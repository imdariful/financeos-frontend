import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import OnboardLayout from './layouts/OnboardLayout/OnboardLayout';

function App() {
  return (
    <>
      {/* <MainLayout /> */}
      <OnboardLayout />
    </>
  );
}

export default App;
