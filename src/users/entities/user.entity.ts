import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity({ name: '_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'username', unique: true, nullable: false })
  username: string;

  @Column({ name: 'email', unique: true, nullable: false })
  email: string;

  @Column({ name: 'hashed_password', nullable: false })
  hashedPassword: string;

  @OneToOne(() => Role, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true,
  })
  role: Role;
}
