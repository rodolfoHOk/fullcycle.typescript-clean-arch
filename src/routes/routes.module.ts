import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';
import { RouteSchema } from '../@core/infra/db/typeorm/route.schema';
import { RouteTypeOrmRepository } from '../@core/infra/db/typeorm/route-typeorm.repository';
import { Route } from '../@core/domain/route.entity';
import { RoutesGateway } from './routes.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteTypeOrmRepository,
      useFactory(dataSource: DataSource) {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory(routeRepository: RouteRepositoryInterface) {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory(routeRepository: RouteRepositoryInterface) {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    RoutesGateway,
  ],
})
export class RoutesModule {}
