import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"readers", synchronize: false})
export class Reader {
  @PrimaryGeneratedColumn()
  r_id: number;

  @ApiProperty()
  @Column( { length: 30 } )
  r_name: string;

  @ApiProperty()
  @Column( { length: 30 } )
  r_surname: string;

  @ApiProperty()
  @Column( { length: 30, nullable: true } )
  r_lastname: string;

  @ApiProperty()
  @Column( )
  birthdate: Date;

  @ApiProperty()
  @Column( { length: 200 } )
  address: string;

  @ApiProperty()
  @Column( {type: 'bigint'} )
  passport : number;

  @ApiProperty()
  @Column( { length:16 } )
  phone: string;
}