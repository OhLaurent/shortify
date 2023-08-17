import { PrismaClient } from '@prisma/client'
import { IUrlRepository } from '../../IUrlRepository'
import { Url } from '../../../entities/Url'

export class PrismaUrlRepository implements IUrlRepository {

    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async save(url: Url): Promise<Url> {
        const newUrlProps = {
            id: url.id,
            link: url.link
        }

        const newUrl = await this.prisma.url.create({
            data: newUrlProps
        })

        return newUrl
    }

    async getById(id: string): Promise<Url> {
        const foundUrl = await this.prisma.url.findUnique({
            where: {
                id
            }
        })

        return foundUrl
    }

    async index(): Promise<Url[]> {
        const foundUrls = await this.prisma.url.findMany()
        return foundUrls
    }
}