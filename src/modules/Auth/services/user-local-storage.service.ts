import { UserEntity } from '../../User';

export class UserLocalStorageService {
  static save(user: UserEntity) {
    localStorage.setItem('user', user.serialize());
  }

  static remove() {
    localStorage.removeItem('user');
  }

  static load(): UserEntity | null {
    const serializedUser = localStorage.getItem('user');

    if (!serializedUser) return null;

    return UserEntity.deserialize(serializedUser);
  }
}
