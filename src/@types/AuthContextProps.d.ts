export type AuthContextProps = {
  isAuthenticated: boolean;
  user: UserType | null;
  token: string | null;
  login: (userName: string, email: string) => void;
  logout: () => void;
};
