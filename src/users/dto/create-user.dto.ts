import { Role } from '../../roles/entities/role.entity';
import { Profile } from '../../profiles/entities/profile.entity';

export class CreateUserDto {
  email: string;
  password: string;
  roles: Role[];
  profile: Profile;
}
