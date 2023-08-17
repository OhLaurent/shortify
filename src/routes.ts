import { Router } from "express";
import { CreateUrlController } from "./useCases/CreateUrl/CreateUrlController";
import { IndexUrlsController } from "./useCases/IndexUrls/IndexUrlsController";
import { GetUrlController } from "./useCases/GetUrl/GetUrlController";

const createUrlController = new CreateUrlController
const indexUrlsController = new IndexUrlsController
const getUrlController = new GetUrlController

const routes = Router()

routes.post("/shortify", createUrlController.execute)

routes.get("/shortify/index", indexUrlsController.execute)

routes.get("/shortify/:id", getUrlController.execute)

export { routes }