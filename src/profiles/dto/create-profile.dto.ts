import { Group } from '../../groups/entities/group.entity';

export class CreateProfileDto {
  username: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  birthday: Date;
  groups: Group[];
}
