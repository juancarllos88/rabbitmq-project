import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RabbitmqService } from './../rabbitmq/services/rabbitmq.service';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User, // @Inject('SUBSCRIBERS_AMQP') // private readonly subscribersService: ClientProxy,
  ) {}

  async create(requestUserDto: RequestUserDto): Promise<ResponseUserDto> {
    const user = await this.userRepository.create({
      name: requestUserDto.name,
      age: requestUserDto.age,
    });
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      createdAt: user.createdAt,
    } as ResponseUserDto;
  }

  async findAll(): Promise<ResponseUserDto[]> {
    const users = await this.userRepository.findAll();
    const list = users.map((element) => {
      return {
        id: element.id,
        name: element.name,
        age: element.age,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt,
      };
    });
    //this.subscribersService.emit('hello', 'juan carlos');
    return list;
  }

  async findOne(id: number): Promise<ResponseUserDto> {
    const user = await this.userRepository.findByPk(id);
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      createdAt: user.createdAt,
    } as ResponseUserDto;
  }

  async update(
    id: number,
    requestUserDto: RequestUserDto,
  ): Promise<[number, User[]]> {
    const user = await this.userRepository.update(
      {
        name: requestUserDto.name,
        age: requestUserDto.age,
      },
      { where: { id: id } },
    );

    return user;
  }

  async remove(id: number) {
    await this.userRepository.destroy({
      where: {
        id,
      },
    });
  }
}
