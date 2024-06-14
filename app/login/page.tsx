'use client'
import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const LoginPage = () => {
    return (
        <>
            <Header
                heading="Logar na sua conta"
                paragraph="Não tem conta ainda? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />
        </>
    );
}

export default LoginPage;
