import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';

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
  getShortUrl(@Body() body: { longUrl: string }) {
    const longUrl = body.longUrl || '';
    if (!longUrl) {
      throw new BadRequestException('longUrl is required');
    }
    const shortUrl = this.urlShortnerService.shortern(longUrl);
    if (shortUrl) {
      return {
        shortUrl,
      };
    } else
      return {
        shortUrl: '',
      };
  }
}
