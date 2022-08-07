import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect, useContext } from "react";
import * as yup from "yup";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "contexts/AuthContext";

type TLogin = {
    email: string;
    password: string;
};

export const Login = () => {

    let navigate = useNavigate();

    const { loading, handleLogin } = useContext(AuthContext);

    const handleClickLogin = async ({ email, password }: TLogin) => {
        const { success, message } = await handleLogin(email, password);

        if (success) {
            navigate("/dashboard");
        }

        if (!success) {
            alert(message);
        }

    };

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Digite um email válido")
            .required("este campo é obrigatório"),
        password: yup
            .string()
            .min(5, "a senha deve ter no mínimo 5 caracteres")
            .required("Este campo é obrigatório"),
    });

    const initialValues: TLogin = {
        email: "",
        password: "",
    };

    return (
        <Container>
            <div className="container-login">
                <h2>Login</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => handleClickLogin(values)}
                    validationSchema={validationLogin}
                >
                    <Form>
                        <Field
                            name="email"
                            className="form-field"
                            type="email"
                            placeholder="Usuário"
                        />
                        <ErrorMessage
                            component="span"
                            name="username"
                            className="form-error"
                        />
                        <Field
                            name="password"
                            className="form-field"
                            placeholder="Senha"
                            type="password"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="form-error"
                        />
                        <button className="button" type="submit">
                            Acessar
                        </button>
                    </Form>
                </Formik>
            </div>
        </Container>
    );
};
