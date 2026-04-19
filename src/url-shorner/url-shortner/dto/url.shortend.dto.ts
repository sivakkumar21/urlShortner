import { IsNotEmpty, IsUrl, MaxLength } from 'class-validator';

export class CreateShortUrlDTO {
  @IsNotEmpty()
  @IsUrl()
  @MaxLength(2048)
  longUrl: string;
}
