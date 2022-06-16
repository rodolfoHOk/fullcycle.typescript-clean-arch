import { RouteInMemoryRepository } from '../infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('Create route use case test', () => {
  it('should be create a route', async () => {
    const repository = new RouteInMemoryRepository();
    const createRouteUseCase = new CreateRouteUseCase(repository);
    const output = await createRouteUseCase.execute({
      title: 'my route',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    });
    expect(repository.insert).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: 'my route',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [],
    });
  });
});
