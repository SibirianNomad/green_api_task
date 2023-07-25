import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';


export class DataDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsArray()
  array: any[];

}
