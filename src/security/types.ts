export interface AuthUserI {
  id: number;
}

export interface CookieDataI {
  token: string;
  user: AuthUserI;
}
