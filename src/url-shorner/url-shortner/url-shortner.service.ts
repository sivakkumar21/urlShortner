import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { encodeBase62 } from 'src/utils/encodeBase62';

@Injectable()
export class UrlShortnerService {
  constructor(private configService: ConfigService) {}
  private counter = 1000;
  urlMap: Record<string, string> = {};

  shortern(longUrl: string) {
    const shortUrl = encodeBase62(this.counter++);
    this.urlMap[shortUrl] = longUrl;
    return this.configService.get('BASE_URL') + shortUrl;
  }

  getOriginalUrl(shortUrl: string) {
    return this.urlMap[shortUrl];
  }
}
