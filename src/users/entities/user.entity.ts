import { Role } from '../../roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'user_email', unique: true, nullable: false })
  email: string;
  @Column({ name: 'user_hashed_password', nullable: false })
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @OneToOne(() => Profile, { nullable: true })
  @JoinColumn()
  profile: Profile;
}
