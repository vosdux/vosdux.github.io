import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import ChangePassword from '@pages/ChangePassword';
import PasswordRequest from '@pages/PasswordRequest';
import CoursePage from '@pages/CoursePage';
import AdminCoursePage from '@pages/AdminCoursePage';
import AdminLessonPage from '@pages/AdminLessonPage';

// const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));
// const LoginPage = React.lazy(() => import('./pages/LoginPage'));
// const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));

export const AppRoute = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="courses" element={<CoursePage />} />
        </Route>
        <Route path="/admin/*" element={<AdminPage />}>
          <Route path="courses" element={<AdminCoursePage />} />
          <Route path="lessons" element={<AdminLessonPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/change-password/:link" element={<ChangePassword />} />
        <Route path="/change-password-request" element={<PasswordRequest />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
});
