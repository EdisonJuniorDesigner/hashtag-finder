import { Container } from "./styles";

export const Login = () => {
    return (
        <Container>
            <div className="container-login">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                    <button>Acessar</button>
                </form>
            </div>
        </Container>
    );
};
