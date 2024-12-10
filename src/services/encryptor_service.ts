import bcrypt from 'bcrypt';

export class EncryptorService {
  private readonly saltRounds = 10;

  async encrypt(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
