import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): string[] {
    return ['ali', 'awais', 'hassan'];
  }

  @Get(':id') // GET /users/:id
  getOneUser(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  createUser(@Body() user: {}) {
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
