import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string[] {
    return ['ali', 'awais', 'hassan'];
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return { id };
  }
}
