import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  // Acessar / ver Algo - Get
  // Criar algo - POST
  // Deletar Algo - DELETE
  // Atualizar algo - PUT / PATCH

  @Post('/user')
  async createUser(@Body() dados: UserDto) {
    return await this.userService.createUser(dados);
  }

  @Get('/user')
  getUser() {
    return this.userService.getUser();
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Put('/user/:id')
  updateUserPut(@Param('id') id: string, @Body() dados: UserDto) {
    return this.userService.updateUserPut(+id, dados);
  }
  @Patch('/user/:id')
  updateUserPatch(@Param('id') id: string, @Body() dados: any) {
    return this.userService.updateUserPatch(+id, dados);
  }

  @Get('/user/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }
}
