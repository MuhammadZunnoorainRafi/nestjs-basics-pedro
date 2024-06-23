import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly db: DbService) {}
  create(createEmployeeDto: Prisma.UsersCreateInput) {
    return this.db.users.create({ data: createEmployeeDto });
  }

  findAll() {
    return this.db.users.findMany();
  }

  findOne(id: number) {
    return this.db.users.findUnique({ where: { id } });
  }

  update(id: number, updateEmployeeDto: Prisma.UsersUpdateInput) {
    return this.db.users.update({ data: updateEmployeeDto, where: { id } });
  }

  remove(id: number) {
    return this.db.users.delete({ where: { id } });
  }
}
