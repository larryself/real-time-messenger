import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email', length: 100, unique: true })
  email: string;

  @Column({ name: 'name', length: 100, unique: true })
  name: string;

  @Column({ name: 'password', length: 100 })
  password: string;
}
