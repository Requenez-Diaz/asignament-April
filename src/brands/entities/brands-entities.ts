import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brands {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, type: 'text' })
  name: string;

  @Column({ type: 'text' })
  color: string;

  @Column({ type: 'text' })
  model: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  userCreate: string;

  @Column({ type: 'numeric' })
  dateModified: number;

  @Column({ type: 'numeric' })
  createdDate: number;
}
