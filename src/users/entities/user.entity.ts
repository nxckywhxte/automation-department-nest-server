import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity({ name: '_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'username', type: 'string', unique: true, nullable: false })
  username: string;

  @Column({ name: 'email', type: 'string', unique: true, nullable: false })
  email: string;

  @Column({ name: 'hashed_password', type: 'string', nullable: false })
  hashedPassword: string;

  @OneToOne(() => Role, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true,
  })
  role: Role;
}
