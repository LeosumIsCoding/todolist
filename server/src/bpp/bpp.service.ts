import { Injectable } from '@nestjs/common';
import User from 'src/domain/User';

export interface service {
  postUser(): string;
  getHello(): string;
}

@Injectable()
export class BppService implements service {
  postUser(): string {
    return '123';
  }
  user: User;
  getHello(): string {
    return 'Hello BWorld!';
  }
}
