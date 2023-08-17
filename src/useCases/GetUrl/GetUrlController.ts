import { Request, Response } from "express";
import { GetUrlUseCase } from "./GetUrlUseCase";
import { PrismaUrlRepository } from "../../repositories/implementations/prisma/UrlsRepository";

export class GetUrlController {
    async execute(req: Request, res: Response) {
        const repo = new PrismaUrlRepository
        const getUrlUseCase = new GetUrlUseCase(repo)

        const { id } = req.params

        try {
            const url = await getUrlUseCase.execute({ id })
            return res.status(200).redirect(url.link)
        } catch (err) {
            console.error(err)
            return res.status(400).json({
                "error": "Couldn't find url."
            })
        }
    }
}