export type UserType = {
  id: number;
  nome: string;
  sobrenome?: string;
  cpf?: string;
  email: string;
  telefone?: string;
  senha: string;
  dataCriacao: string;
  perfil: Perfil;
  vendedorId?: number;
  rua?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  status: string;
  codigoVerificacao?: number;
};

export enum Perfil {
  ADMINISTRADOR = "ADMINISTRADOR",
  COLABORADOR = "COLABORADOR",
  VENDEDOR = "VENDEDOR",
  CLIENTE = "CLIENTE",
}
