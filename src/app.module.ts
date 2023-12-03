import { Module } from '@nestjs/common';
import { AuthorController } from './controllers/author.controller';
import { AuthorService } from './service/author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './db/author.entity';
import { Book } from './db/book.entity';
import { Genre } from './db/genre.entity';
import { Reader } from './db/reader.entity';
import { Mooving_b } from './db/mooving_b.entity';
import { ReaderController } from './controllers/reader.controller';
import { ReaderService } from './service/reader.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'klimmed',
      database: 'books',
      entities: [Author, Book, Genre, Reader, Mooving_b],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Author, Book, Genre, Reader, Mooving_b]),
  ],
  controllers: [AuthorController, ReaderController],
  providers: [AuthorService, ReaderService],
})
export class AppModule {}