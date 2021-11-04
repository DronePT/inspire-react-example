import { Entity } from '../../../core';

interface UserState {
  id: number;
  name: string;
  email: string;
}

export class UserEntity extends Entity<number, UserState> {
  get name() {
    return this.getState().name;
  }

  get email() {
    return this.getState().email;
  }

  static fromJson(userState: UserState) {
    return new UserEntity(userState);
  }

  static deserialize(s: string) {
    return new UserEntity(JSON.parse(s));
  }
}
