import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class AmqpDto {
  @ApiModelProperty({ type: String, example: 'Fulano' })
  public codigoProduto: string;
  @ApiModelProperty({ type: Number, example: 33 })
  public quantidade: number;
}
