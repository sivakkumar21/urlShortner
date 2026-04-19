import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { CreateShortUrlDTO } from './dto/url.shortend.dto';

@Controller('')
export class UrlShortnerController {
  private counter = 1000;
  urlMap = {};

  constructor(private readonly urlShortnerService: UrlShortnerService) {}

  @Get(':shortUrl')
  @Redirect()
  getRedirectUrl(@Param('shortUrl') shortUrl: string) {
    const url = this.urlShortnerService.getOriginalUrl(shortUrl);
    if (!url) {
      throw new NotFoundException();
    }

    return {
      url,
      statusCode: 302,
    };
  }

  @Post('/shortenUrl')
  getShortUrl(@Body() body: CreateShortUrlDTO) {
    const longUrl = body.longUrl;

    const shortUrl = this.urlShortnerService.shortern(longUrl);
    return { shortUrl };
  }
}
