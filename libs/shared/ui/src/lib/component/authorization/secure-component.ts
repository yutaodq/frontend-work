import { AuthorizationLevel } from './authorization-level';

export interface ISecureComponent {
    name: string;
    authorizationLevel: AuthorizationLevel;
}

export abstract class SecureComponent implements ISecureComponent {
    public name: string;
    public authorizationLevel: AuthorizationLevel;
}
