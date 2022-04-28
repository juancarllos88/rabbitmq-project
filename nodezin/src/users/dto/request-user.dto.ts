import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RequestUserDto {
  @ApiModelProperty({ type: String, example: 'Fulano' })
  public name: string;
  @ApiModelProperty({ type: Number, example: 33 })
  public age: number;
}
