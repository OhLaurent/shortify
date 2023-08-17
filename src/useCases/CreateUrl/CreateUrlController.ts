import { Request, Response } from "express";
import { CreateUrlUseCase } from "./CreateUrlUseCase";
import { PrismaUrlRepository } from "../../repositories/implementations/prisma/UrlsRepository";

export class CreateUrlController {
    async execute(req: Request, res: Response) {
        const repo = new PrismaUrlRepository
        const createUrlUseCase = new CreateUrlUseCase(repo)

        const { link } = req.body

        try {
            const newUrl = await createUrlUseCase.execute({ link })
            return res.status(201).json(newUrl)
        } catch (err) {
            console.error(err)
            return res.status(400).json({
                "error": "Couldn't create url."
            })
        }
    }
}