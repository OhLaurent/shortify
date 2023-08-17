import { Request, Response } from "express";

import { IndexUrlsUseCase } from "./IndexUrlsUseCase";
import { PrismaUrlRepository } from "../../repositories/implementations/prisma/UrlsRepository";

export class IndexUrlsController {
    async execute(req: Request, res: Response) {
        const repo = new PrismaUrlRepository
        const indexUrlsUseCase = new IndexUrlsUseCase(repo)

        try {
            const urls = await indexUrlsUseCase.execute();
            return res.status(200).json(urls)
        } catch (err) {
            console.error(err)
            return res.status(400).json({
                "error": "Couldn't index urls."
            })
        }
    }
}