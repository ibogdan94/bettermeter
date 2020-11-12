import {CredentialsManager} from './CredentialsManager';
import {AuthUserI} from './types';

export class CookiesManager {
  public static isAuthorized(): boolean {
    return Boolean(CredentialsManager.getCredentials());
  }

  public static getUser(): AuthUserI | undefined {
    const cookieData = CredentialsManager.getCredentials();
    return cookieData?.user;
  }
}
