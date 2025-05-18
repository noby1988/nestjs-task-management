import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthDataService } from './auth-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  providers: [AuthService, AuthDataService],
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
