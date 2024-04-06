import React, { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  
  const register = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user); 
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Ошибка регистрации:", error.message);
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          setUser(userCredential.user); 
          console.log("Success");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Ошибка входа:", error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({}); 
        navigate("/signin"); 
      })
      .catch((error) => {
        console.error("Ошибка выхода:", error.message);
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, signIn, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
