import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import LoginPasswordCreate from './LoginPasswordCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="criar" element={<LoginPasswordCreate />}></Route>
          <Route path="perdeu" element={<LoginPasswordLost />}></Route>
          <Route path="resetar" element={<LoginPasswordReset />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
