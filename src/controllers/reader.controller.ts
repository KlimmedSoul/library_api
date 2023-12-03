import { Controller, Post, Body, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { ReaderService } from 'src/service/reader.service';
import { Reader } from '../db/reader.entity';
import { ApiProperty } from '@nestjs/swagger';


@Controller('/reader')
export class ReaderController {

  constructor(private readonly readerService: ReaderService) {}

  @ApiProperty({type: {Reader}})
  @Post('/add')
  async createAuthor(@Body() reader: Reader):Promise<Reader> {
      return await this.readerService.createReader(reader);
  }

  @ApiProperty({type: {Reader}})
  @Get('/getAll') 
  async findAll() : Promise<Reader[]> {
    return await this.readerService.findAll();
  }

  @ApiProperty({type: {Reader}})
  @Post('/getByName')
  async findByName(@Body() reader: {name: string, surname: string, lastname: string}) : Promise<Reader> {
    return await this.readerService.getReaderByName(reader.name, reader.surname, reader.lastname);
  }
}