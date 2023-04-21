import { Controller, Get, Post } from '@nestjs/common';
import { BppService, service } from './bpp.service';

@Controller('bpp')
export class BppController {
  constructor(private readonly appService: service) {}
  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/user')
  postUser(): string {
    return this.appService.postUser();
  }
}
