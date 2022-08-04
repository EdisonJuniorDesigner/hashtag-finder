import { Airtable } from "../providers/Api";

interface ILogin {
  Email: string;
  Senha: string;
}

type TLoginResponse = {
  records: [
      {
          id: string;
          fields: ILogin;
      }
  ];
};

const loginUser = async (email: string, password: string) => {

  if(!email || !password) return { success: false, message: "Preencha todos os campos" };

  const response = await Airtable.get<TLoginResponse>(`/Login?filterByFormula={Email}="${email}"`);
  const accounts = await response.data;

  if(!accounts.records.length) return { success: false, message: "Erro ao logar" };

  const loginData = accounts.records[0].fields;

  if(email != loginData.Email || password != loginData.Senha) return { success: false, message: "Erro ao logar" };

  return { success: true, message: "Login realizado com sucesso" };

}

export const LoginService = {
  loginUser,
};
