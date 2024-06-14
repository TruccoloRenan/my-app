'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from "./FormAction";
import Input from "./Input";
import api from '../services/api';
import { useRouter } from 'next/navigation';

interface SignupState {
    [key: string]: string;
}

const fields = signupFields;
const fieldsState: SignupState = {};

fields.forEach(field => fieldsState[field.id] = '');

const Signup  = () => {
    const Navigate = useRouter();

    const [signupState, setSignupState] = useState<SignupState>(fieldsState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createAccount();
    };

    const createAccount = async () => {
        try {
            const name = signupState['usuario'];
            const email = signupState['endereco-email'];
            const password = signupState['confirme-senha'];

            const response = await api.post("/user", { email, password, name });

            if (response.status === 201) {
                alert("Conta criada com sucesso!");
                Navigate.push("/login");
            } else {
                console.log(response);
                alert("Erro ao criar a conta!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className=''>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }

                <FormAction text="Signup" type="Button"/>
            </div>
        </form>
    );
}

export default Signup;
