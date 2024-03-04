import { IsString, IsInt, IsObject,IsOptional,MinLength,IsNotEmpty,MaxLength } from 'class-validator';
export class UserDto {
   
   
    @IsString({ message: 'Please provide a valid name' })
  @MinLength(3, { message: 'Name should be at least 3 characters long' })
  @MaxLength(20, { message: 'Name should not be longer than 20 characters' })
  @IsNotEmpty({ message: 'Please provide name' })
  readonly name: string;

  @IsInt({ message: 'Please provide a valid age' })
  readonly age: number;

  @IsString({ message: 'Please provide a valid breed' })
  @MinLength(3, { message: 'Address should be at least 3 characters long' })
  @MaxLength(20, { message: 'Address should not be longer than 20 characters' })
  @IsOptional()
  readonly address?: string;
}