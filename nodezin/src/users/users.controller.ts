import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RequestUserDto } from './dto/request-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseUserDto } from './dto/response-user.dto';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '',
    description: 'Criar usuário',
  })
  @ApiResponse({ status: 201, description: 'Created', type: ResponseUserDto })
  @Post()
  async create(
    @Body() requestUserDto: RequestUserDto,
  ): Promise<ResponseUserDto> {
    return await this.usersService.create(requestUserDto);
  }

  @Get()
  async findAll(): Promise<ResponseUserDto[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ResponseUserDto> {
    return await this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() requestUserDto: RequestUserDto,
  ): Promise<[number, User[]]> {
    return await this.usersService.update(+id, requestUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.usersService.remove(+id);
  }
}
