import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { usersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): string[] {
    return ['ali', 'awais', 'hassan'];
  }

  @Get(':id') // GET /users/:id
  getOneUser(@Param('id', ParseIntPipe) id: string) {
    return { id };
  }

  @Post() // POST /users
  createUser(@Body(ValidationPipe) user: usersDto) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  updateUser(@Param('id') id: string, @Body() updatedUser: {}) {
    return { id, ...updatedUser };
  }

  @Delete(':id') // DELETE /users/:id
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
