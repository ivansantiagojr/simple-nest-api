import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Product> {
    return this.productsService.getOne(params.id);
  }

  @Post()
  async create(@Body() product: Product) {
    this.productsService.create(product);
  }

  @Put()
  async edit(@Body() product: Product): Promise<[number, Product[]]> {
    return this.productsService.edit(product);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.productsService.delete(params.id);
  }
}
