import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory.repository";

const port = process.env.PORT || 3333;
const app: Express = express();
app.use(express.json());

const routeRepo = new RouteInMemoryRepository();

app.get("/routes", async (req: Request, res: Response) => {
  const listAllRoutesUseCase = new ListAllRoutesUseCase(routeRepo);
  const output = await listAllRoutesUseCase.execute();
  res.status(200).json(output);
});

app.post("/routes", async (req: Request, res: Response) => {
  const createRouteUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createRouteUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => console.log(`sever running on port: ${port}`));
