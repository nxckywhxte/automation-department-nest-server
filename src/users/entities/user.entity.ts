import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'username', type: 'string', unique: true, nullable: false })
  username: string;

  @Column({ name: 'email', type: 'string', unique: true, nullable: false })
  email: string;

  @Column({ name: 'hashed_password', type: 'string', nullable: false })
  hashedPassword: string;
}
