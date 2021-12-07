import React from 'react';
import { Route, Routes } from 'react-router';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import LoginPasswordCreate from './LoginPasswordCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="criar" element={<LoginPasswordCreate />}></Route>
        <Route path="perdeu" element={<LoginPasswordLost />}></Route>
        <Route path="resetar" element={<LoginPasswordReset />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
