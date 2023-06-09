import { AuthModule } from './auth/auth.module';
import { BoardsModule } from './boards/boards.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, AuthModule],
})
export class AppModule {}
