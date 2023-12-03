import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Genre } from './genre.entity';
import { Author } from './author.entity';

@Entity({name:"books", synchronize: false})
export class Book {
  @PrimaryGeneratedColumn()
  b_id: number;

  @ApiProperty()
  @Column( { length: 60} )
  b_title: string;

  @ApiProperty()
  @Column()
  b_count: number;

  @ManyToOne(() => Genre)
  g_id: Genre;

  @ManyToOne(() => Author)
  a_id: Author;
}
