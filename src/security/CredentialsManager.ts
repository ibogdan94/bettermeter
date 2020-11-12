import atob from 'atob';
import btoa from 'btoa';
import Cookies from 'js-cookie';
import {CookieDataI} from './types';

export class CredentialsManager {
  public static storeKey = '23sdfsf23f23fsdf444';

  public static getCredentials(): CookieDataI | undefined {
    const cookieData = Cookies.get(CredentialsManager.storeKey);
    if (!cookieData) {
      return undefined;
    }
    return CredentialsManager.parseCookieData(cookieData);
  }

  public static setCredentials(data: CookieDataI): void {
    Cookies.set(
      CredentialsManager.storeKey,
      btoa(JSON.stringify({...data, generated_in: Date.now()})),
      {
        expires: 2147483647,
        path: '/',
      },
    );
  }

  // public static removeCredentials(ctx?: any): void {
  public static removeCredentials(): void {
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now().toString());
    Cookies.remove(CredentialsManager.storeKey);
  }

  public static parseCookieData(cookieData: string): CookieDataI | undefined {
    let authData: CookieDataI;
    try {
      authData = JSON.parse(atob(cookieData));
    } catch (error) {
      return undefined;
    }

    return authData;
  }
}
