import { UserEntity } from '../../User';

export class LoginService {
  static login(email: string, password: string) {
    // aqui fazemos o request e é devolvido o resultado
    const result = { id: 1, name: 'André Alves', email };

    return UserEntity.fromJson(result);
  }
}
