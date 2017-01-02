export class User {
  constructor(
    public isAdmin: boolean,
    public firstName: string,
    public lastName: string,
    public userName: string,
    public email: string,
    public created: string,
    public profile: string,
    public github: string,
    public steam: string,
    public google: string,
    public twitter: string,
    public linkedin: string,
    public facebook: string,
    public password: string,
  ) { }
}
