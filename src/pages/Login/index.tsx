import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { Container } from "./styles";
import { AboutContentService } from "services";

type TLogin = {
    id: string;
    email: string;
    senha: string;
};

export const Login = () => {
    const [loginAccountList, setLoginAccount] = useState<TLogin[]>([]);

    const { getLoginAccount } = AboutContentService;

    const handleClickLogin = () => {
        // getLoginAccount().then(res =>        setLoginAccount(res));
    };

    const validationLogin = yup.object().shape({
        username: yup.string().required("este campo é obrigatório"),
        password: yup
            .string()
            .min(5, "a senha deve ter no mínimo 5 caracteres")
            .required("este campo é obrigatório"),
    });

    return (
        <Container>
            <div className="container-login">
                <h2>Login</h2>
                <Formik
                    initialValues={{}}
                    onSubmit={handleClickLogin}
                    validationSchema={validationLogin}
                >
                    <Form>
                        <Field
                            name="username"
                            className="form-field"
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
