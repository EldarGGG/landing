
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SelectionsPage from './SelectionsPage';
import AboutPage from './AboutPage';
import MainPage from './MainPage';
import SelectionLanding from './components/pages/SelectionLanding';
import { selectionsData } from './data';
import { getSelectionStatus } from './utils';

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToMain = (hash?: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  const navigateToSelections = () => {
    navigate('/selections');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path="/" element={
        <MainPage
          navigateToMain={navigateToMain}
          navigateToSelections={navigateToSelections}
          navigateToAbout={navigateToAbout}
          selectionsData={selectionsData}
          getSelectionStatus={getSelectionStatus}
        />
      } />
      <Route path="/selections" element={
        <SelectionsPage
          navigateToMain={navigateToMain}
          selectionsData={selectionsData}
          getSelectionStatus={getSelectionStatus}
        />
      } />
      <Route path="/about" element={
        <AboutPage navigateToMain={navigateToMain} />
      } />
      <Route path="/astana" element={
        <SelectionLanding citySlug="astana" />
      } />
      <Route path="/bishkek" element={
        <SelectionLanding citySlug="bishkek" />
      } />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
