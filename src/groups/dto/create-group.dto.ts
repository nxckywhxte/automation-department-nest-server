import { IsNotEmpty } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty({ message: 'Обязательное поле' })
  name: string;
}
