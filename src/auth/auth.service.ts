import { Injectable } from '@nestjs/common';
import { AuthDataService } from './auth-data.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
@Injectable()
export class AuthService {
  constructor(private readonly authDataService: AuthDataService) {}

  signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authDataService.createUser(authCredentialsDto);
  }

  signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    return this.authDataService.signIn(authCredentialsDto);
  }
}
