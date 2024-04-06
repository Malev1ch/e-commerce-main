import React, { useContext } from "react";
import Form from "../components/Form";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const { email, pass, setEmail, setPass, register } =
        useContext(AuthContext);
    
        const handleRegister = () => {
            register({ email, password: pass });
          };
  return (
    <div>
      <Form
        title="Регистрация"
        buttonTitle="Зарегистрироваться"
        email={email}
        password={pass}
        setEmail={setEmail}
        setPass={setPass}
        register={register}
      />
    </div>
  );
};

export default SignUp;
