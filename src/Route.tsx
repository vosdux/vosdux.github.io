import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));

export const AppRoute = () => {
  const BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/react-18-typescript'; // because of github pages

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
