import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name:"genres", synchronize: false})
export class Genre {
  @PrimaryGeneratedColumn()
  g_id: number;

  @ApiProperty()
  @Column( )
  g_desc: string;

  @ApiProperty()
  @Column({ length: 20 })
  g_name: string;

}