'use client'
import React from 'react';
import Header from '../components/Header';
import Signup from '../components/Signup';

const LoginPage = () => {
    return (
        <>
            <Header
                heading="Crie sua Conta"
                paragraph="Já tem conta? "
                linkName="login"
                linkUrl="/login"
            />
            <Signup />
        </>
    );
}

export default LoginPage;
