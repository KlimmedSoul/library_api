import { Controller, Post, Body, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthorService } from 'src/service/author.service';
import { Author } from '../db/author.entity';
import { ApiProperty } from '@nestjs/swagger';


@Controller('/author')
export class AuthorController {

  constructor(private readonly authorService: AuthorService) {}

  @ApiProperty({type: {Author}})
  @Post('/add')
  async createAuthor(@Body() user: Author):Promise<Author> {
      return await this.authorService.createAuthor(user);
  }

  @ApiProperty({type: {Author}})
  @Get('/getAll') 
  async findAll() : Promise<Author[]> {
    console.log(123);
    return await this.authorService.findAll();
  }

  @ApiProperty({type: {Author}})
  @Post('/getByName')
  async findByName(@Body() author: {name: string, surname: string, lastname: string}) : Promise<Author> {
    return await this.authorService.getAuthorByName(author.name, author.surname, author.lastname);
  }
}