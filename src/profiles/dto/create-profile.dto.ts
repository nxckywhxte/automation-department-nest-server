import { Group } from '../../groups/entities/group.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty({ message: 'Обязательное поле' })
  username: string;
  @IsNotEmpty({ message: 'Обязательное поле' })
  lastName: string;
  @IsNotEmpty({ message: 'Обязательное поле' })
  firstName: string;
  @IsNotEmpty({ message: 'Обязательное поле' })
  patronymic: string;
  @IsNotEmpty({ message: 'Обязательное поле' })
  birthday: Date;
  groups: Group[];
}
