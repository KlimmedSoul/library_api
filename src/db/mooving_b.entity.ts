import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';
import { Reader } from './reader.entity';

@Entity({name:"mooving_b", synchronize: false})
export class Mooving_b {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reader)
  r_id: Reader;

  @ManyToOne(() => Book)
  b_id: Book;

  @ApiProperty({nullable: false})
  @Column()
  date_out: Date;

  @ApiProperty()
  @Column({ nullable: true})
  date_in: Date;

  @ApiProperty()
  @Column()
  deadline: Date;

}