import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { Container } from "./styles";
import { LoginService } from "services";
import { useNavigate } from "react-router-dom"

type TLogin = {
    email: string;
    password: string;
};

export const Login = () => {

    const { loginUser } = LoginService;
    let navigate = useNavigate();

    const [ login, setLogin ] = useState<{success: boolean, message: string}|null>(null);


    const handleClickLogin = async (values: TLogin) => {
        const loginResponse = await loginUser(values.email, values.password);
        setLogin(loginResponse);

    };

    useEffect(() => {
        if(login?.success){
            navigate("/dashboard");
            return;
        }

        alert(login?.message);

    }, [login])

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
