import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: '_roles' })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'role_name', unique: true, nullable: false })
  name: string;
}
