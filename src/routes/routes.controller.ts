import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
// import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
// import { UpdateRouteDto } from './dto/update-route.dto';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';
import { routeSeed } from './routes.seed';

@Controller('routes')
export class RoutesController {
  // constructor(private readonly routesService: RoutesService) {} // ou
  constructor(
    private createRouteUseCase: CreateRouteUseCase,
    private listAllRoutesUseCase: ListAllRoutesUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    // return this.routesService.create(createRouteDto); // ou
    return this.createRouteUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    // return this.routesService.findAll(); // ou
    return this.listAllRoutesUseCase.execute();
  }

  @Get('seed')
  async seed() {
    for (const routeProps of routeSeed) {
      await this.createRouteUseCase.execute(routeProps);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.routesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
  //   return this.routesService.update(+id, updateRouteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.routesService.remove(+id);
  // }
}
