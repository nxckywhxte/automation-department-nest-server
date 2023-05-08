import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../groups/entities/group.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'username', unique: true })
  username: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'patronymic' })
  patronymic: string;
  @Column({ name: 'birthday', type: 'date' })
  birthday: Date;
  @ManyToMany(() => Group, { nullable: true })
  @JoinTable()
  groups: Group[];
}
