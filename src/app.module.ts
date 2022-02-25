import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost/fazt-products-nest'), //afegir objecte config mongoose?
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
