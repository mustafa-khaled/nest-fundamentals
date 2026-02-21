import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  lastName: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 10,
  })
  gender?: string;

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
}
