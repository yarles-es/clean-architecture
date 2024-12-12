import { EncryptorService } from '../services/encryptor_service';

export const createServices = () => ({
  encryptorService: new EncryptorService(),
});
