import { Role } from '../../roles/entities/role.entity';
import { Profile } from '../../profiles/entities/profile.entity';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Обязательное поле' })
  @IsEmail({}, { message: 'Неверный формат электронного адреса' })
  email: string;
  @IsNotEmpty({ message: 'Обязательное поле' })
  @MaxLength(18, { message: 'Пароль может содержать до 18 символов' })
  @MinLength(8, { message: 'Пароль должен содержать более 8 символов' })
  password: string;
  @IsNotEmpty({ message: 'Обязательное поле' })
  roles: Role[];
  profile: Profile;
}
