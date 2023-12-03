import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"authors", synchronize: false})
export class Author {
  @PrimaryGeneratedColumn()
  a_id: number;

  @ApiProperty()
  @Column( { length: 60 } )
  a_name: string;

  @ApiProperty()
  @Column( { length: 60 } )
  a_surname: string;

  @ApiProperty()
  @Column( { length: 60, nullable: true} )
  a_lastname: string;

  @ApiProperty()
  @Column()
  birthdate: Date;

}