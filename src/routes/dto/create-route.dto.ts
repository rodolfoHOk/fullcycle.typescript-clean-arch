type LatLng = {
  lat: number;
  lng: number;
};

export class CreateRouteDto {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}

//class-validator: para validações do DTO com Decorators
// ex:
// @IsNotEmpty()
// @IsString()
// title: string;
