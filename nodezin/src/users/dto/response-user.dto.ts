import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ResponseUserDto {
  @ApiModelProperty({ type: Number, example: 1 })
  public id: number;
  @ApiModelProperty({ type: String, example: 'Fulano' })
  public name: string;
  @ApiModelProperty({ type: Number, example: 33 })
  public age: number;
  @ApiModelProperty({ type: Date, example: '' })
  public createdAt: Date;
  @ApiModelProperty({ type: Date, example: '' })
  public updatedAt: Date;
}
