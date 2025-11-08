import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Patch('/calc')
  proccessCalc(@Body() body: { p1: number; p2: number }): string {
    const { p1, p2 } = body;
    return `The result is: ${p1 + p2}`;
  }
}
