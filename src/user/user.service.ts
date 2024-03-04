import { Inject, Injectable } from '@nestjs/common';

import { UtilService } from 'common/util.service';
import { User } from 'src/db/entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}
  // users : IUser[] = []
  async getUser(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async createUser(user: Partial<User>): Promise<number> {
    user.name = UtilService.convertNameToUpperCase(user.name);
    const result = await this.userRepository.create(user);
    console.log(`create user ${result}`);
    return result.id;
  }
  async updateUser(id: number, userBody: Partial<User>): Promise<number> {
    if (userBody?.name) {
      userBody.name = UtilService.convertNameToUpperCase(userBody.name);
    }

    const user = await this.getUser(id);

    if (user) {
      const result = await this.userRepository.update(userBody, {
        where: { id },
      });

      if (result) return result.at(0);
    }
  }
}
