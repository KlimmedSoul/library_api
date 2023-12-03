import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiErrors } from 'src/exeptions/ApiErrors';
import { Author } from 'src/db/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async createAuthor(author: Author): Promise<Author> {
    try {
      const newAuthor = await this.authorRepository.save(author);
       
      return newAuthor 
    } catch (e) {
      throw ApiErrors.IncorrectDataError()      
    }
  }

  async findAll(): Promise<Author[]> {
    try {
      const authors = await this.authorRepository.find();
      return authors
    } catch (e) {
      throw ApiErrors.BadRequest("Не найдены")
    }
  }

  async getAuthorByName(surname: string, name: string, lastname: string): Promise<Author> {
    try {
      if (!lastname) {
        lastname = null;
      }

      if(surname && name) {
        const gettedAuthor = await this.authorRepository.findOneBy({a_surname: surname, a_name: name, a_lastname: lastname});
        return gettedAuthor;
      }else {
        throw ApiErrors.IncorrectDataError()
      }
    } catch (e) {
      throw ApiErrors.IncorrectDataError()
    }

  }

}