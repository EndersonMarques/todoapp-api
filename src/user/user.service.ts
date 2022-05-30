import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async createUser(dados: UserDto) {
    const user = await this.userRepository.save(dados);
    return user;
  }

  async getUser() {
    const users: UserEntity[] = await this.userRepository.find();
    return users;
  }

  async deleteUser(id: string) {
    return this.userRepository.delete({ id: +id });
  }

  async updateUserPut(id: number, dados: UserDto) {
    const user = this.userRepository.findOne({ id });

    if (!user) throw new NotFoundException('Usuario nao encontrado');

    await this.userRepository.update(id, dados);

    return this.userRepository.findOne({ id });
  }

  async updateUserPatch(id: number, dados: UserDto) {
    const user = this.userRepository.findOne({ id });

    if (!user) throw new NotFoundException('Usuario nao encontrado');

    await this.userRepository.update(id, dados);

    return this.userRepository.findOne({ id });
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ id });

    if (!user) throw new NotFoundException('Usuario nao encontrado');

    return user;
  }
}
