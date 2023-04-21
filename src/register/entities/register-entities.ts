import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  nameEvent: string;

  @Column({ type: 'text' })
  user: string;

  @Column({ type: 'numeric' })
  date: number;

  @Column({ type: 'numeric' })
  our: number;

  @Column({ type: 'text' })
  typeEvent: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  stateEvent: string;
}
