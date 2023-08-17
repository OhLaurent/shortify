import { Url } from "../../entities/Url";
import { IUrlRepository } from "../../repositories/IUrlRepository";
import { generateId } from "../../utils/generateId";
import { ICreateUrlDTO } from "./ICreateUrlDTO";

export class CreateUrlUseCase {
    private repository: IUrlRepository

    constructor(repo: IUrlRepository) {
        this.repository = repo;
    }

    private async generateNewId(): Promise<string> {
        const repo = this.repository

        const newId = generateId(8)
        if(!await repo.getById(newId)) {
            return newId
        }

        return await this.generateNewId()
    }

    public async execute(props: ICreateUrlDTO) {
        const repo = this.repository

        const id = await this.generateNewId()

        const newUrlProps: Url = {
            id,
            link: props.link
        }

        const url = new Url(newUrlProps)

        const save = await repo.save(url)

        if (!save) {
            throw new Error("Couldn't save url.")
        }

        return url
    }
}