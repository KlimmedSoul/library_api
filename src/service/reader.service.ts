import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiErrors } from 'src/exeptions/ApiErrors';
import { Reader } from 'src/db/reader.entity';

@Injectable()
export class ReaderService {
  constructor(
    @InjectRepository(Reader)
    private readerRepository: Repository<Reader>,
  ) {}

  async createReader(reader: Reader): Promise<Reader> {
    try {
      const newReader = await this.readerRepository.save(reader);
       
      return newReader 
    } catch (e) {
      throw ApiErrors.IncorrectDataError()      
    }
  }

  async findAll(): Promise<Reader[]> {
    try {
      const readers = await this.readerRepository.find();
      return readers
    } catch (e) {
      throw ApiErrors.BadRequest("Не найдены")
    }
  }

  async getReaderByName(surname: string, name: string, lastname: string): Promise<Reader> {
    try {
      if (!lastname) {
        lastname = null;
      }
      if(surname && name) {
        const gettedReader = await this.readerRepository.findOneBy({r_surname: surname, r_name: name, r_lastname: lastname});
        return gettedReader;
      } else {
        throw ApiErrors.IncorrectDataError()
      }
    } catch (e) {
      throw ApiErrors.IncorrectDataError()
    }

  }

}