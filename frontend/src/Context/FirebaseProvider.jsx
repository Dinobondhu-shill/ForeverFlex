import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "./firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(user)

const createUser = (email, password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
}
// update user
const updateUserProfile =(fullName, number)=>{
  return updateProfile(auth.currentUser, {
    displayName: fullName, 
    phoneNumber: number,
  })
}
const login = (email, password)=>{
  setLoading(true);
  alert('Login User Successfully')
  return signInWithEmailAndPassword(auth, email, password)
}
const googleLogin =()=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}
const logOut = ()=>{
  setUser(null);
  signOut(auth);
}
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth , (user) =>{
    setUser(user)
    setLoading(false)
  })
  return ()=> unsubscribe()
},[])

const values= {
  createUser,
  user,
  loading,
  login,
  googleLogin,
  logOut,
  updateUserProfile
}

return (
  <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
)

}
export default FirebaseProvider;