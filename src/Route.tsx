import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import ChangePassword from '@pages/ChangePassword';

// const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
// const LoginPage = React.lazy(() => import('./pages/LoginPage'));
// const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/change-password/:link" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
};
