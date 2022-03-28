import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'message', length: 1000 })
  message: string;

  @Column({ name: 'to' })
  to: string;

  @CreateDateColumn({ name: 'date' })
  created_at: Date;
}
