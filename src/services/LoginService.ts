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

const getLoginAccount = async () => {
  const response = await Airtable.get<TLoginResponse>(
      "/Login?view=Grid%20view"
  );
  const accounts = await response.data;

  return accounts.records[0].fields;
};

const loginUser = async (email: string, password: string) => {

  if(!email || !password) return { success: false, message: "Preencha todos os campos" };

  const loginData = await getLoginAccount();

  if(email != loginData.Email) return { success: false, message: "Email invalido" };
  if(password != loginData.Senha) return { success: false, message: "Sennha invalida" };

  return { success: true, message: "Login realizado com sucesso" };

}

export const LoginService = {
  loginUser,
};
