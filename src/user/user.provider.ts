import { User } from 'src/db/entities/user.entity';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
