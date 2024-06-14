interface FormField {
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    autoComplete: string;
    isRequired: boolean;
    placeholder: string;
}

const loginFields: FormField[] = [
    {
        labelText: "Endereço de Email",
        labelFor: "endereço de Email",
        id: "endereco-email",
        name: "email",
        type: "email",
        autoComplete: 'email',
        isRequired: true,
        placeholder: "Endereço de email"
    },
    {
        labelText: "Senha",
        labelFor: "Senha",
        id: "senha",
        name: "senha",
        type: "password", // Corrigido de 'senha' para 'password'
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Senha"
    }
];

const signupFields: FormField[] = [
    {
        labelText: "Usuario",
        labelFor: "Usuario",
        id: "usuario",
        name: "usuario",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Nome de Usuario"
    },
    {
        labelText: "Endereço de Email",
        labelFor: "endereco-email",
        id: "endereco-email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Endereço de Email"
    },
    {
        labelText: "Senha",
        labelFor: "Senha",
        id: "senha",
        name: "senha",
        type: "password",
        autoComplete: "new-password",
        isRequired: true,
        placeholder: "Senha"
    },
    {
        labelText: "Confirme a Senha",
        labelFor: "confirme-senha",
        id: "confirme-senha",
        name: "confirmar-senha",
        type: "password", // Corrigido de 'senha' para 'password'
        autoComplete: "new-password",
        isRequired: true,
        placeholder: "Confirme a Senha"
    }
];

export { loginFields, signupFields };
