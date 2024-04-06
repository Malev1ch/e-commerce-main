import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Form from '../components/Form';

const SignIn = () => {
  const { currentUser, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async ({ email, password }) => {
    try {
      await signIn(email, password);
      if (currentUser) {
          navigate("/"); 
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <div>
      <Form
        title="Вход"
        buttonTitle="Войти"
        register={handleSignIn}
      />
    </div>
  );
};

export default SignIn;