import { Profile } from 'src/profile/profile.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 24,
  })
  username: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 100,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: ['insert'],
  })
  @JoinColumn()
  profile?: Profile;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}
