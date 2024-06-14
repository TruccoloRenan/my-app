'use client'
export const TOKEN_KEY = "@Token";
export const USER = "Usuario"
export const USER_ID = "UserId";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(USER);
export const getUserId = () => localStorage.getItem(USER_ID);
export const login = (token: string, name: string, userId: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER, name)
  localStorage.setItem(USER_ID, userId)
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
  localStorage.removeItem(USER_ID);
};

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface AuthRouteProps{
  children: ReactNode;
}

const AuthRoute = ({ children } : AuthRouteProps) => {
  const router = useRouter();

  useEffect(() => {

    const isAuthenticated = localStorage.getItem(TOKEN_KEY) !== null;

    if (!isAuthenticated){
      router.push('/login');
    }

  }, [])

  return<>{children}</>

}
export default AuthRoute