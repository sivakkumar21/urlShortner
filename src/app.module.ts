import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortnerModule } from './url-shorner/url-shortner/url-shortner.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UrlShortnerModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
